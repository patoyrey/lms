import uuid4 from "uuid4";
import { conn } from "../config/dbconfig/db_connection";
import { UserResponse } from "../response/userResponse";

export class Test {
  test_id: string;
  test_name: string;

  constructor(init: Test) {
    this.test_id = init.test_id;
    this.test_name = init.test_name;
  }
  public async add(): Promise<UserResponse> {
    this.test_id = uuid4()
    const query = `insert into test SET ?`;
    console.log("query: ", query);
    await conn.query(query, [this], (err: any) => {
      if (err) {
        return {
          succeeded: false,
          msg: err,
        };
      }
    });

    return {
      succeeded: true,
      msg: "",
    };
  }
}
