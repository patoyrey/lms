import { Doctor } from "../models/Doctor";
import { Request, Response } from "express";


export const addDoctorHandler = async (req: Request, res: Response) => {
  const doctor = new Doctor(req.body);
  const response = await doctor.add();
  return res.status(200).json(response);
};
