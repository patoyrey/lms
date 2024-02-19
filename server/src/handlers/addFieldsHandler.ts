import { Request, Response } from "express";
import { Field } from "../models/Field";

export const addFieldsHandler = async (req: Request, res: Response) => {
  const field = new Field(req.body);
  const response = await field.add();
  return res.status(200).json(response);
};
