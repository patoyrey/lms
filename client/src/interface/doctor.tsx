import { Doctor_Entity } from "../entity/doctorEntity";

export interface Doctor {
  doctor_info: {
    doc_id: string;
    doc_fname: string;
    doc_lname: string;
    doc_mname: string;
    doc_gender: number; //not sure
    doc_specialization: string;
    doc_prc_no: string;
    doc_philhealth_no: string;
    doc_tin_no: string;
    doc_room_no: string;
    doc_schedule: string;
    doc_phone: string;
    doc_price: number;
    doc_email: string;
    doc_status: string;
    doc_created_at: string;
    doc_udpated_at: string;
    user_id: string;
  };
  doctor: Doctor_Entity[];
  editDoctor: Doctor_Entity;
}
