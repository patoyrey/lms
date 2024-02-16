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
}
