import { Request, Response } from "express";
import { Patient } from "../models/Patient";

export const deletePatientHandler = async (req: Request, res: Response) => {
    const id = req.params.patientId;
    const patient = new Patient(req.body);
    const response = await patient.delete(id);
    return res.status(200).json(response);
}