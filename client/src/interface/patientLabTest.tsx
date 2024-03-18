import { PatientLabTestEntity } from "../entity/patientLabTestEntity";

export interface PatientLabTest {
  patient_labtest_field_id: string;
  patien_labtest_id: string;
  field_id: string;
  result: string;
  createdAt: string;
  udpatedAt: string;
  patient_lab_test_data: PatientLabTestEntity[];
}
