import { Request, Response, json } from "express";
import { PatientLabTest } from "../models/PatientLabTest";

export const RetrievePatientLabTestHandler = async (
  req: Request,
  res: Response
) => {
  const patient_id = String(req?.query?.patient_id);

  const patientlabtest = new PatientLabTest(req.body);
  const response = await patientlabtest.select(patient_id);

  return res.status(200).json(response);
};
