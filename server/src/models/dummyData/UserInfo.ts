import { Gender } from "../../enums/Genders";
import { UserInfo } from "../UserInfo";

export const dummyUserInfo = new UserInfo({
  user_info_id: "user_info_id",
  fname: "fname",
  lname: "lname",
  mname: "mname",
  address: "address",
  gender: Gender.Male,
  bdate: "bdate",
  age: "age",
  phone_num: "phone_num",
  user_id: "user_id",
});
