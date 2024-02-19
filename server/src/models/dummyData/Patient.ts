import { Gender } from "../../enums/Gender";
import { Patient } from "../Patient";

export const dummyPatient = new Patient({
    patient_id: "patientId",
    user_id: "userId",
    patient_fname: "patient_fname",
    patient_mname: "patient_mname",
    patient_lname: "patient_lname",
    patient_gender: Gender.Female,
    patient_address: "patient_address",
    company: "company",
    date_of_visit: "date_of_visit",
    referred_name: "referred_name",
    patient_dob: "patient_dob",
    patient_age: 18,
    created_at: 'createdAt',
    updated_at: 'updated_at'
} as Patient)