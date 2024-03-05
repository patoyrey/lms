import { Request, Response } from "express";
import { Patient } from "../models/Patient";

export const updatePatientHandler = async (req: Request, res: Response) => {
    const id = req.params.patientId;
    const patient = new Patient(req.body);
    const response = await patient.update(id);
    return res.status(200).json(response);
};
