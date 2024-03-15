import uuid4 from "uuid4";
import { queryFields } from "../utils/QueryFields";
import { PatientTestResponse } from "../response/patientsTestResponse";

export class PatientLabTest {
  patient_labtest_id: string;
  labtest_id: string;
  patient_id: string;
  createdAt: string;

  constructor(init: PatientLabTest) {
    this.patient_labtest_id = init.patient_labtest_id;
    this.labtest_id = init.labtest_id;
    this.patient_id = init.patient_id;
    this.createdAt = init.createdAt;
  }

  public async add(): Promise<PatientTestResponse> {
    this.patient_labtest_id = uuid4();
    let query = "insert into patient_labtest set ?";
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
