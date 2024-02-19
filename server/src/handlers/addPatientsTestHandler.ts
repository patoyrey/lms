import { Request, Response } from "express";

import { PatientsTest } from "../models/PatientsTest";

export const addPatientsTestHandler = async (req: Request, res: Response) => {
  const field = new PatientsTest(req.body);
  const response = await field.add();
  return res.status(200).json(response);
};
