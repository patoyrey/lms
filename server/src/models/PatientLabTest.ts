import uuid4 from "uuid4";
import { queryFields, retrieveData } from "../utils/QueryFields";
import { PatientTestResponse } from "../response/patientsTestResponse";
import { PatientLabTestResponse } from "../response/patientlabtesResponse";

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
    this.createdAt = new Date().toString();
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
  public async select(patient_id: string): Promise<PatientLabTestResponse> {
    const query = `SELECT patient_labtest.patient_labtest_id AS patient_labtest_id, field.field_id AS field_id FROM field
INNER JOIN labtest ON labtest.fields_id = field.field_id
INNER JOIN patient_labtest ON patient_labtest.labtest_id = labtest.labtest_id
WHERE patient_labtest.patient_id = "${patient_id}"`;

    return retrieveData(query)
      .then((res: any) => {
        return {
          succeeded: true,
          msg: "Success",
          data: res,
        };
      })
      .catch((error) => {
        return {
          succeeded: false,
          msg: error,
          data: [],
        };
      });
  }
}
