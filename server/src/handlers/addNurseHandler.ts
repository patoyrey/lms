import { Request, Response } from "express";
import { Nurse } from "../models/Nurse";

export const addNurseHandler = async (req: Request, res: Response) => {
  const nurse = new Nurse(req.body);
  const response = await nurse.add();
  return res.status(200).json(response);
};
