import { conn } from "../config/dbconfig/db_connection";
import { LoginStatus } from "../enums/LoginStatus";
import { UserType } from "../enums/UserType";
import { UserResponse } from "../response/userResponse";
import { v4 as uuidv4 } from 'uuid';
import { Admin } from "./Admin";

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

  //
  public async add(admin: Admin, user: User): Promise<UserResponse> {
    this.user_id = uuidv4()
    let query = `insert into user SET ?`
    console.log("query: ", query)
    console.log("user data: ", user)

    await conn.query(query, [this], (err: any) => {
      if (err) {
        return {
          succeeded: false,
          msg: err
        }
      }
    })

    switch (this.userType) {
      case UserType.Admin:
        admin.admin_id = uuidv4()
        admin.user_id = this.user_id
        console.log('admin data: ', admin)
        query = `insert into admin SET ?`
        await conn.query(query, [admin], (err: any) => {
          console.log("Admin Inserted Successfully")
          if (err) {
            return {
              succeeded: false,
              msg: err
            }
          }
        })
      case UserType.Patient:
      case UserType.Doctor:
      case UserType.Nurse:
      default: break
    }

    return {
      succeeded: true,
      msg: ''
    }
  }
}
