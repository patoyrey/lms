import { Request, Response } from "express";
import { Doctor } from "../models/Doctor";

export const deleteDoctorHandler = async (req: Request, res: Response) => {
  const id = req.params.doctorId;
  const doctor = new Doctor(req.body);
  const response = await doctor.delete(id);
  return res.status(200).json(response);
};
