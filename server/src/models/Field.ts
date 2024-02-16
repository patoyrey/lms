import { conn } from "../config/dbconfig/db_connection";
import { FieldResponse } from "../response/fieldResponse";
import uuid4 from "uuid4";
import { queryFields } from "../utils/QueryFields";
export class Field {
  field_id: string;
  field_name: string;

  constructor(init: Field) {
    this.field_id = init.field_id;
    this.field_name = init.field_name;
  }

  public async add(): Promise<FieldResponse> {
    this.field_id = uuid4();
    const query = `insert into field SET ?`;
    console.log(query);
    // await conn.query(query, [this], (err: any) => {
    //   if (err) {
    //     return {
    //       succeeded: false,
    //       msg: err,
    //     };
    //   }
    // });
    queryFields(query, this);
    return {
      succeeded: true,
      msg: "",
    };
  }
}
