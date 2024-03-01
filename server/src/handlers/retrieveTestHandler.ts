import { Request, Response } from "express";
import { retrieveData } from "../utils/QueryFields";

export const RetrieveTestHandler = async (req: Request, res: Response) => {
  const query = "SELECT * FROM test ";
  const response = await retrieveData(query);

  console.log(response);
  return res.status(200).json(response);
};
