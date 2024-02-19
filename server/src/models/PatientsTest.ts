import uuid4 from "uuid4";
import { queryFields } from "../utils/QueryFields";
import { PatientTestResponse } from "../response/patientsTestResponse";

export class PatientsTest {
  patients_test_id: string;
  patient_id: string;
  field_id: string;
  result: string;
  created_at: string;
  updated_at: string;

  constructor(init: PatientsTest) {
    this.patients_test_id = init.patients_test_id;
    this.patient_id = init.patient_id;
    this.field_id = init.field_id;
    this.result = init.result;
    this.created_at = init.created_at;
    this.updated_at = init.updated_at;
  }

  public async add(): Promise<PatientTestResponse> {
    this.patients_test_id = uuid4();
    let query = "insert into patientstest set ?";
    return queryFields(query, this)
      .then((res: any) => {
        return {
          succeeded: true,
          msg: "Success",
        };
      })
      .catch((error) => {
        return {
          succeeded: false,
          msg: error.sqlMessage,
        };
      });
  }
}
