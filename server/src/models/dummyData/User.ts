import { LoginStatus } from "../../enums/LoginStatus";
import { UserType } from "../../enums/UserType";
import { User } from "../User";

export const dummyUser = new User({
  user_id: "userId",
  email: "sampleemail@gmail.com",
  password: "password",
  created_at: "createdAt",
  status: LoginStatus.Login,
  userType: UserType.Admin,
} as User);
