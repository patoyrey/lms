import { Admin } from "../models/Admin";
import { User } from "../models/User";
import { dummyAdmin } from "../models/dummyData/Admin";
import { dummyUser } from "../models/dummyData/User";

export const insertDefaultUser = () => {
  const user = new User(dummyUser);

  const data = {
    ...dummyUser,
    ...dummyAdmin,
  };

  user.add(data);
};
