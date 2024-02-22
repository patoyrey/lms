import { Request, Response } from "express";
import { Login } from "../models/Login";

export const loginHandlers = async (req: Request, res: Response) => {
  const login = new Login(req.body);
  const response = await login.select();
  const token = response.token;
  // req.session = {
  //   jwt: token,
  // };
  req.session!.token = token;

  // res.cookie(" ", response.token, {
  //   httpOnly: false,
  // });

  return res.status(200).json(response);
};
