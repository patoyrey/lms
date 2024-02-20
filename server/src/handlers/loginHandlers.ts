import { Request, Response } from "express";
import { Login } from "../models/Login";

export const loginHandlers = async (req: Request, res: Response) => {
  const login = new Login(req.body);
  const response = await login.select();

  res.cookie(" ", response.token, {
    httpOnly: true,
  });

  return res.status(200).json(req.session);
};
