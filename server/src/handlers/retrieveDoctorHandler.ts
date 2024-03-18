import { Request, Response } from "express";
import { retrieveData } from "../utils/QueryFields";

export const retrieveDoctorHandler = async (req: Request, res: Response) => {
  const query = "SELECT * FROM doctor";
  const response = await retrieveData(query);

  return res.status(200).json(response);
};
