import uuid4 from "uuid4";
import { Gender } from "../enums/Gender";
import { UserResponse } from "../response/userResponse";
import { conn } from "../config/dbconfig/db_connection";
import { PatientTestResponse } from "../response/patientsTestResponse";
import { PatientResponse } from "../response/patientResponse";
import { DeleteQuery, queryFields, updateQuery } from "../utils/QueryFields";

export class Patient {
  patient_id: string;
  user_id: string;
  patient_fname: string;
  patient_mname: string;
  patient_lname: string;
  patient_gender: Gender;
  patient_address: string;
  company: string;
  date_of_visit: string;
  referred_name: string;
  patient_dob: string;
  patient_age: number;
  created_at: string;
  updated_at: string;
  constructor(init: Patient) {
    this.patient_id = init.patient_id;
    this.user_id = init.user_id;
    this.patient_fname = init.patient_fname;
    this.patient_mname = init.patient_mname;
    this.patient_lname = init.patient_lname;
    this.patient_gender = init.patient_gender;
    this.patient_address = init.patient_address;
    this.company = init.company;
    this.date_of_visit = init.date_of_visit;
    this.referred_name = init.referred_name;
    this.patient_dob = init.patient_dob;
    this.patient_age = init.patient_age;
    this.created_at = init.created_at;
    this.updated_at = init.updated_at;
  }
  public async add(): Promise<UserResponse> {
    this.patient_id = uuid4();

    const query = `insert into patient SET ?`;

    return queryFields(query, this)
      .then((res: any) => {
        return {
          succeeded: true,
          msg: "Succedded",
          patient_id: this.patient_id,
        };
      })
      .catch((error: any) => {
        return {
          succeeded: false,
          msg: error,
        };
      });
    // return await conn.query(query, [this], (err: any, result: any) => {
    //   if (err) {
    //     return {
    //       succeeded: false,
    //       msg: err,
    //     };
    //   } else {
    //     return {
    //       succeeded: true,
    //       msg: "Succedded",
    //       patient_id: this.patient_id,
    //     };
    //   }
    // });
  }
  public async update(patientId: any): Promise<PatientResponse> {
    this.updated_at = new Date().toString();
    const query = "update patient set ? where patient_id = ?";

    queryFields(`update patient SET? where patient_id =  "${patientId}"`, this);

    return {
      succeeded: true,
      msg: "Success",
    };
  }

  public async delete(patient_id: any): Promise<PatientResponse> {
    await queryFields(
      `DELETE FROM patient WHERE patient_id = "${patient_id}"`,
      this
    );

    return {
      succeeded: true,
      msg: "",
    };
  }
}

// public async select(): Promise<UserResponse> {
//     this.patient_id = uuid4();
//     const query = `select * from patient`;
//     return await conn.query(query, (err: any, result: any) => {
//         console.log(result)
//         if (err) {
//             return {
//                 succeeded: false,
//                 msg: err,
//             };
//         } else {
//             return {
//                 succeeded: false,
//                 msg: result,

//             };
//         }
//     });
// }
