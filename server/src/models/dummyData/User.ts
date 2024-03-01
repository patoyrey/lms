import { LoginStatus } from "../../enums/LoginStatus";
import { UserType } from "../../enums/UserType";
import { User } from "../User";

export const dummyUser = new User({
  user_id: "userId",
  email: process.env.EMAIL_USER,
  password: process.env.PASSWORD_USER,
  created_at: "createdAt",
  status: LoginStatus.Login,
  userType: UserType.Admin,
} as User);
