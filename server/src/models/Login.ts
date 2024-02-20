import { jwtToken } from "../jwt/jwttoken";
import { LoginResponse } from "../response/loginResponse";
import { loginQuery } from "../utils/QueryFields";

export class Login {
  email: string;
  password: string;

  constructor(init: Login) {
    this.email = init.email;
    this.password = init.password;
  }

  public async select(): Promise<LoginResponse> {
    const query = `select * from user where email = ? and password = ?`;

    return loginQuery(query, [this.email, this.password])
      .then((result: any) => {
        return {
          succeeded: true,
          msg: "Success",
          token: jwtToken(result[0].user_id, this.email),
        };
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
