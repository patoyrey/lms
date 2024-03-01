import { jwtToken } from "../jwt/jwttoken";
import { LoginResponse } from "../response/loginResponse";
import { loginQuery } from "../utils/QueryFields";
import bcrypt from "bcryptjs";
export class Login {
  email: string;
  password: string;

  constructor(init: Login) {
    this.email = init.email;
    this.password = init.password;
  }

  public async select(): Promise<LoginResponse> {
    const query = `select * from user where email = ?`;

    return loginQuery(query, [this.email])
      .then((result: any) => {
        if (result.length > 0) {
          const hashpPass = bcrypt.compareSync(
            this.password,
            result[0].password
          );

          if (hashpPass) {
            return {
              succeeded: true,
              msg: "Success",
              token: jwtToken(result[0].user_id, this.email),
            };
          } else {
            return {
              succeeded: false,
              msg: "Incorrect Password",
              token: undefined,
            };
          }
        } else {
          return {
            succeeded: false,
            msg: "Email not found",
            token: undefined,
          };
        }
      })
      .catch((error: any) => {
        return {
          succeeded: false,
          msg: error.message,
          token: undefined,
        };
      });
  }
}
