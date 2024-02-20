import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");
export const middleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Session", req.headers.cookie);

  const sessionToken = req.headers.cookie;
  jwt.verify(
    sessionToken,
    process.env.ACCESS_TOKEN,
    (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json({ msg: "Unauthorized!" });
      } else {
        console.log("Token verified:", decoded);
        next();
      }
    }
  );
};
