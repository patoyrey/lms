import { Request, Response } from "express";
import { Field } from "../models/Field";

export const updateFieldHandler = async (req: Request, res: Response) => {
  const id = req.params.fieldId;
  const field = new Field(req.body);
  const response = await field.update(id);
  return res.status(200).json(response);
};
