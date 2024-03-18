export class Doctor_Entity {
  doc_id: string;
  doc_fname: string;
  doc_lname: string;
  doc_mname: string;
  doc_gender: number;
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

  constructor(init: Doctor_Entity) {
    this.doc_id = init.doc_id;
    this.doc_fname = init.doc_fname;
    this.doc_lname = init.doc_lname;
    this.doc_mname = init.doc_mname;
    this.doc_gender = init.doc_gender;
    this.doc_specialization = init.doc_specialization;
    this.doc_prc_no = init.doc_prc_no;
    this.doc_philhealth_no = init.doc_philhealth_no;
    this.doc_tin_no = init.doc_tin_no;
    this.doc_room_no = init.doc_room_no;
    this.doc_schedule = init.doc_schedule;
    this.doc_phone = init.doc_phone;
    this.doc_price = init.doc_price;
    this.doc_email = init.doc_email;
    this.doc_status = init.doc_status;
    this.doc_created_at = init.doc_created_at;
    this.doc_udpated_at = init.doc_udpated_at;
    this.user_id = init.user_id;
  }
}
