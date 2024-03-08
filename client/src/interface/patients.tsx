import { Patient_Entity } from "../entity/patientEntity";

export interface Patients {
  patient_lab: {
    patient_id: string;
    user_id: string;
    patient_fname: string;
    patient_mname: string;
    patient_lname: string;
    patient_gender: string;
    patient_address: string;
    company: string;
    date_of_visit: string;
    referred_name: string;
    patient_dob: string;
    patient_age: number;
    created_at: string;
    updated_at: string;
  }
  patients: Patient_Entity[];
  editPatient: Patient_Entity
}
