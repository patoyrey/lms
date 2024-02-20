import { Request, Response } from "express";
import { Login } from "../models/Login";

export const loginHandlers = async (req: Request, res: Response) => {
  const login = new Login(req.body);
  const response = await login.select();
  console.log(response);
  req.session = {
    cookies: response.token,
  };
  console.log("Req", req.session);
  return res.status(200).json(req.session);
};
