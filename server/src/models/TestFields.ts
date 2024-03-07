import { queryFields, updateQuery } from "../utils/QueryFields";
import uuid4 from "uuid4";
import { TestField } from "../response/testFieldsResponse";

export class TestFields {
  labtest_id: string;
  fields_id: string;
  test_id: string;
  testfields_row: string;
  created_at: string;
  updated_at: string;
  constructor(init: TestFields) {
    this.labtest_id = init.labtest_id;
    this.fields_id = init.fields_id;
    this.test_id = init.test_id;
    this.testfields_row = init.testfields_row;
    this.created_at = init.created_at;
    this.updated_at = init.updated_at;
  }
  public async add(): Promise<TestField> {
    this.labtest_id = uuid4();
    this.created_at = new Date().toString();
    const query = `insert into labtest SET ?`;
    console.log(query);

    queryFields(query, this);
    return {
      succeeded: true,
      msg: "testfield data inserted",
    };
  }
  public async update(): Promise<TestField> {
    const query = "update labtest set testfields_row = ? where labtest_id  = ?";

    return updateQuery(query, [this.testfields_row, this.labtest_id])
      .then((response) => {
        return {
          succeeded: true,
          msg: "",
        };
      })
      .catch((error) => {
        return {
          succeeded: false,
          msg: error,
        };
      });
  }
}
