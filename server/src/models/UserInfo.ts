import { Gender } from "../enums/Genders";

export class UserInfo {
  user_info_id: string;
  fname: string;
  lname: string;
  mname: string;
  address: string;
  gender: Gender;
  bdate: string;
  age: string;
  phone_num: string;
  user_id: string;

  constructor(init: UserInfo) {
    this.user_info_id = init.user_info_id;
    this.fname = init.fname;
    this.lname = init.lname;
    this.mname = init.mname;
    this.address = init.address;
    this.gender = init.gender;
    this.bdate = init.bdate;
    this.age = init.age;
    this.phone_num = init.phone_num;
    this.user_id = init.user_id;
  }
}
