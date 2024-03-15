import { Request, Response } from "express";
import { PatientLabTest } from "../models/PatientLabTest";

export const addPatientLabtestHandler = async (req: Request, res: Response) => {
  const patientLabtest = new PatientLabTest(req.body);
  const response = await patientLabtest.add();
  return res.status(200).json(response);
};
