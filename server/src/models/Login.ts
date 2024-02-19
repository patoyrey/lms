import { LoginResponse } from "../response/loginResponse";
import { loginQuery } from "../utils/QueryFields";
const jwt = require("jsonwebtoken");
export class Login {
  email: string;
  password: string;

  constructor(init: Login) {
    this.email = init.email;
    this.password = init.password;
  }

  public async select(): Promise<LoginResponse> {
    const query = `select * from user where email = ? and password = ?`;
    console.log(this);

    return loginQuery(query, [this.email, this.password])
      .then((result: any) => {
        const token = jwt.sign(
          `${result[0].user_id}${result[0].email}`,
          process.env.ACCESS_TOKEN
        );
        return {
          succeeded: true,
          id: `${result[0].user_id}${result[0].email}`,
          token: token,
        };
      })
      .catch((error: any) => {
        return {
          succeeded: false,
          id: error.sqlMessage,
        };
      });
  }
}
