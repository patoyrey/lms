import { conn } from "../config/dbconfig/db_connection";
import { FieldResponse } from "../response/fieldResponse";
import uuid4 from "uuid4";
import { queryFields } from "../utils/QueryFields";
export class Field {
  field_id: string;
  field_name: string;
  unit: string;
  maleRefRange: string;
  femaleRefRange: string;
  RefRange: string;
  DesirableRefRange: string;
  borderlineRefRange: string;
  highRiskRefRange: string;
  other: string;
  createdAt: string;
  updatedAt: string;

  constructor(init: Field) {
    this.field_id = init.field_id;
    this.field_name = init.field_name;
    this.unit = init.unit;
    this.maleRefRange = init.maleRefRange;
    this.femaleRefRange = init.femaleRefRange;
    this.RefRange = init.RefRange;
    this.DesirableRefRange = init.DesirableRefRange;
    this.borderlineRefRange = init.borderlineRefRange;
    this.highRiskRefRange = init.highRiskRefRange;
    this.other = init.other;
    this.createdAt = init.createdAt;
    this.updatedAt = init.updatedAt;
  }

  public async add(): Promise<FieldResponse> {
    this.field_id = uuid4();
    this.createdAt = new Date().toString();
    const query = `insert into field SET ?`;

    console.log(this);
    console.log(query);

    queryFields(query, this);
    return {
      succeeded: true,
      msg: "",
    };
  }

  public async update(fieldId: any): Promise<FieldResponse> {
    this.updatedAt = new Date().toString();
    // const query = "update field SET ? where field_id = ?";

    queryFields(`update field SET ? where field_id = "${fieldId}"`, this);
    return {
      succeeded: true,
      msg: "",
    };
  }

  public async delete(fieldId: any): Promise<FieldResponse> {
    await queryFields(`DELETE FROM field WHERE field_id = "${fieldId}"`, this);
    await queryFields(
      `DELETE FROM labtest WHERE fields_id = "${fieldId}"`,
      this
    );

    return {
      succeeded: true,
      msg: "",
    };
  }
}
