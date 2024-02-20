const jwt = require("jsonwebtoken");
export const jwtToken = (id: string) => {
  const token = jwt.sign(`${id}`, process.env.ACCESS_TOKEN);

  return token;
};
