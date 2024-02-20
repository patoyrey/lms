import { Request, Response } from "express";
import { Login } from "../models/Login";

export const loginHandlers = async (req: Request, res: Response) => {
  const login = new Login(req.body);
  const response = await login.select();
  //console.log("Token", response.token);

  res.cookie(" ", response.token, {
    httpOnly: true,
  });
  //console.log("Session 1", req.session);
  // req.session = {
  //   session: response.token,
  // };

  //console.log("Req", req);
  return res.status(200).json(req.session);
};
