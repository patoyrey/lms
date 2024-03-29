import uuid4 from "uuid4";
import { Gender } from "../enums/Genders";
import { DoctorResponse } from "../response/doctorResponse";
import { queryFields } from "../utils/QueryFields";

export class Doctor {
  doc_id: string;
  doc_fname: string;
  doc_lname: string;
  doc_mname: string;
  doc_gender: Gender;
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

  constructor(init: Doctor) {
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

  public async add(): Promise<DoctorResponse> {
    this.doc_id = uuid4();
    this.doc_created_at = new Date().toString();
    const query = "insert into doctor SET ?";
    queryFields(query, this);
    return {
      succeeded: true,
      msg: "",
    };
  }

  public async delete(doctorId: any): Promise<DoctorResponse> {
    await queryFields(`DELETE FROM doctor WHERE doc_id = "${doctorId}"`, this);

    return {
      succeeded: true,
      msg: "",
    };
  }

  public async update(doctorId: any): Promise<DoctorResponse> {
    this.doc_udpated_at = new Date().toString();

    queryFields(`UPDATE doctor SET ? where doc_id = "${doctorId}"`, this);
    return {
      succeeded: true,
      msg: "",
    };
  }
}
