export class PatientLabTestEntity {
  patient_labtest_field_id: string;
  patien_labtest_id: string;
  field_id: string;
  result: string;
  createdAt: string;
  udpatedAt: string;
  constructor(init: PatientLabTestEntity) {
    this.patient_labtest_field_id = init.patient_labtest_field_id;
    this.patien_labtest_id = init.patien_labtest_id;
    this.field_id = init.field_id;
    this.result = init.result;
    this.createdAt = init.createdAt;
    this.udpatedAt = init.udpatedAt;
  }
}
