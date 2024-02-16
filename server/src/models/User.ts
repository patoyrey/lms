import { conn } from "../config/dbconfig/db_connection";
import { LoginStatus } from "../enums/LoginStatus";
import { UserType } from "../enums/UserType";
import { UserResponse } from "../response/userResponse";

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

  public async add(): Promise<UserResponse> {
    const query = `insert into user (${Object.keys(this).map((item: string) => item).join(',')}) values ("${Object.values(this).map((item: string) => item).join('","')}");`
    console.log("query: ", query)
    await conn.query(query, function () {
        console.log("User inserted")
      })
      
    return {
        succeeded: true,
        msg: ''
    }
  }
}
