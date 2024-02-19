import { Gender } from "../../enums/Genders";
import { Doctor } from "../Doctor";

export const dummuyDoctor = new Doctor({
  doc_id: "doc_id",
  doc_fname: "doc_fname",
  doc_lname: "doc_lname",
  doc_mname: "doc_mnane",
  doc_gender: Gender.Male,
  doc_specialization: "doc_specialization",
  doc_prc_no: "doc_prc_no",
  doc_philhealth_no: "doc_philhealt_no",
  doc_tin_no: "doc_tin",
  doc_room_no: "doc_room_no",
  doc_schedule: "doc_schedule",
  doc_phone: "doc_phone",
  doc_price: 10.2,
  doc_created_at: "doc_created_at",
  doc_udpated_at: "doc_updated_at",
  user_id: "user_id",
} as Doctor);
