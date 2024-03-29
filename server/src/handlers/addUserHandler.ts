import { NextFunction, Request, Response } from "express";
import { User } from "../models/User";
import { Admin } from "../models/Admin";

export const addUserHandler = async (req: Request, res: Response) => {
  const user = new User(req.body);
  const response = await user.add(req.body);

  return res.status(200).json(response);
};
