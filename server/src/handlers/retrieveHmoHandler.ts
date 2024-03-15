import { Request, Response } from "express";
import { retrieveData } from "../utils/QueryFields";

export const RetrieveHmoHandler = async (req: Request, res: Response) => {
  const query = "select * from hmo";
  const response = await retrieveData(query);
  console.log(query);
  console.log(response);
  return res.status(200).json(response);
};
