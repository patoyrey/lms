import uuid4 from "uuid4";
import { queryFields } from "../utils/QueryFields";
import { PatientLabTestResponse } from "../response/patientlabtesResponse";
import { PateintLabTestFieldsResponse } from "../response/patientlabtestfieldsResponse";

export class PatientLabTestFields {
  patient_labtest_field_id: string;
  patient_labtest_id: string;
  field_id: string;
  result: string;
  createdAt: string;
  udpatedAt: string;

  constructor(init: PatientLabTestFields) {
    this.patient_labtest_field_id = init.patient_labtest_field_id;
    this.patient_labtest_id = init.patient_labtest_id;
    this.field_id = init.field_id;
    this.result = init.result;
    this.createdAt = init.createdAt;
    this.udpatedAt = init.udpatedAt;
  }

  public async add(query: string): Promise<PateintLabTestFieldsResponse> {
    this.patient_labtest_field_id = uuid4();

    this.createdAt = new Date().toString();

    return await queryFields(query, this)
      .then((res: any) => {
        return {
          succeeded: true,
          msg: "Added",
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
