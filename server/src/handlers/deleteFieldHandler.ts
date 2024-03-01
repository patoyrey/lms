import { Request, Response } from "express";
import { Field } from "../models/Field";

export const deleteFieldHandler = async (req: Request, res: Response) => {
  const id = req.params.fieldId;
  const field = new Field(req.body);
  const response = await field.delete(id);
  return res.status(200).json(response);
};
