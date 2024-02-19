import { Request, Response } from "express";
import { Patient } from "../models/Patient";


export const addPatientHandler = async (req: Request, res: Response) => {
    const patient = new Patient(req.body);
    const response = await patient.add();
    return res.status(200).json(response);
};
