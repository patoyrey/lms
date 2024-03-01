import { Request, Response } from "express";
import { retrieveData } from "../utils/QueryFields";

export const retrieveFieldHandler = async (req: Request, res: Response) => {
  const query = "SELECT * FROM field";
  const response = await retrieveData(query);

  return res.status(200).json(response);
};
