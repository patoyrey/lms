const jwt = require("jsonwebtoken");
export const jwtToken = (id: string, email: string) => {
  const token = jwt.sign(
    {
      id: id,
      email: email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    process.env.ACCESS_TOKEN
  );

  //console.log("Token ", token);
  return token;
};
