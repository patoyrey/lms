import { Request, Response } from "express";
import { Doctor } from "../models/Doctor";

export const updateDoctorHandler = async (req: Request, res: Response) => {
  const id = req.params.doctorId;
  const doctor = new Doctor(req.body);
  const response = await doctor.update(id);
  return res.status(200).json(response);
};
