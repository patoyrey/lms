import uuid4 from "uuid4";
import { queryFields } from "../utils/QueryFields";
import { PatientTestResponse } from "../response/patientsTestResponse";

export class PatientsTest {
  patient_labtest_id: string;
  labtest_: string;
  createdAt: string;

  constructor(init: PatientsTest) {
    this.patient_labtest_id = init.patient_labtest_id;
    this.labtest_ = init.labtest_;

    this.createdAt = init.createdAt;
  }

  public async add(): Promise<PatientTestResponse> {
    this.patient_labtest_id = uuid4();
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
