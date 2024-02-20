const jwt = require("jsonwebtoken");
export const jwtToken = (id: string, email: string) => {
  const token = jwt.sign(
    {
      id: id,
      email: email,
    },
    process.env.ACCESS_TOKEN
  );

  console.log("Token ", token);
  return token;
};
