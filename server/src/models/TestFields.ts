import { queryFields } from "../utils/QueryFields"
import uuid4 from "uuid4";
import { TestField } from "../response/testFieldsResponse";


export class TestFields {
    testfields_id: string
    fields_id: string
    test_id: string

    constructor(init: TestFields) {
        this.testfields_id = init.testfields_id
        this.fields_id = init.fields_id
        this.test_id = init.test_id

    }
    public async add(): Promise<TestField> {
        this.testfields_id = uuid4();
        const query = `insert into testfields SET ?`;
        console.log(query);
        
        queryFields(query, this);
        return {
          succeeded: true,
          msg: "testfield data inserted",
        };
      }

}