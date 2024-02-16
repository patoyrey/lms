import { LoginStatus } from "../enums/LoginStatus";
import { UserType } from "../enums/UserType";

export class User {
  user_id: string;
  email: string;
  password: string;
  created_at: string;
  status: LoginStatus;
  userType: UserType;

  constructor(init: User) {
    this.user_id = init.user_id;
    this.email = init.email;
    this.password = init.password;
    this.created_at = init.created_at;
    this.status = init.status;
    this.userType = init.userType;
  }
}
