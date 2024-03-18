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
}
