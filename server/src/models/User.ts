import uuid4 from "uuid4";
import bcrypt from "bcryptjs";
import { LoginStatus } from "../enums/LoginStatus";
import { UserType } from "../enums/UserType";
import { UserResponse } from "../response/userResponse";
import { Admin } from "./Admin";
import { queryFields } from "../utils/QueryFields";
import { Doctor } from "./Doctor";
import { Patient } from "./Patient";
import { Nurse } from "./Nurse";

export class User {
  user_id: string;
  email: string;
  password: string;
  created_at: string;
  status: LoginStatus;
  userType: UserType;

  constructor(init: User) {
    this.user_id = init.user_id;
    this.email = init.email;
    this.password = init.password;
    this.created_at = init.created_at;
    this.status = init.status;
    this.userType = init.userType;
  }

  public async add(data: any): Promise<UserResponse> {
    this.user_id = uuid4();
    this.password = bcrypt.hashSync(this.password, 8);
    let query = `insert into user SET ?`;
    console.log("query: ", query);
    return queryFields(query, this)
      .then((result: any) => {
        switch (this.userType) {
          //ADMIN
          case UserType.Admin:
            const admin = new Admin(data);
            admin.admin_id = uuid4();
            admin.user_id = this.user_id;
            console.log("admin data: ", admin);
            query = "insert into admin SET ? ";
            return queryFields(query, admin)
              .then((result: any) => {
                return {
                  succeeded: true,
                  msg: "Success",
                };
              })
              .catch((error: any) => {
                return {
                  succeeded: false,
                  msg: error.sqlMessage,
                };
              });
          //DOCTOR
          case UserType.Doctor:
            const doctor = new Doctor(data);
            doctor.doc_id = uuid4();
            doctor.user_id = this.user_id;

            query = "insert into doctor SET ? ";
            return queryFields(query, doctor)
              .then((result: any) => {
                return {
                  succeeded: true,
                  msg: "Success",
                };
              })
              .catch((error: any) => {
                return {
                  succeeded: false,
                  msg: error.sqlMessage,
                };
              });
          //PATIENT
          case UserType.Patient:
            const patient = new Patient(data);
            patient.patient_id = uuid4();
            patient.user_id = this.user_id;

            query = "insert into patient SET ? ";
            return queryFields(query, patient)
              .then((result: any) => {
                return {
                  succeeded: true,
                  msg: "Success",
                };
              })
              .catch((error: any) => {
                return {
                  succeeded: false,
                  msg: error.sqlMessage,
                };
              });
          //NURSE
          case UserType.Nurse:
            const nurse = new Nurse(data);
            nurse.nurse_id = uuid4();
            nurse.user_id = this.user_id;

            query = "insert into nurse SET ? ";
            return queryFields(query, nurse)
              .then((result: any) => {
                return {
                  succeeded: true,
                  msg: "Success",
                };
              })
              .catch((error: any) => {
                return {
                  succeeded: false,
                  msg: error.sqlMessage,
                };
              });
          default:
            return {
              succeeded: false,
              msg: "User type not found",
            };
        }
      })
      .catch((error: any) => {
        return {
          succeeded: false,
          msg: error.sqlMessage,
        };
      });
    // await conn.query(query, [this], (err: any) => {
    //   console.log("User inserted");
    //   if (err) {
    //     return {
    //       succeeded: false,
    //       msg: err,
    //     };
    //   }
    // });
  }
}
