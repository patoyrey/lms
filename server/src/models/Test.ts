import uuid4 from "uuid4";
import { conn } from "../config/dbconfig/db_connection";
import { UserResponse } from "../response/userResponse";

export class Test {
  test_id: string;
  test_name: string;
  test_price: number;
  test_desc: string;
  test_created_at: string;
  test_updated_at: string;
  constructor(init: Test) {
    this.test_id = init.test_id;
    this.test_name = init.test_name;
    this.test_price = init.test_price;
    this.test_desc = init.test_desc;
    this.test_created_at = init.test_created_at;
    this.test_updated_at = init.test_updated_at;
  }
  public async add(): Promise<UserResponse> {
    this.test_id = uuid4();
    this.test_created_at = new Date().toString();
    const query = `insert into test SET ?`;
    console.log("Data: ", this);
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
