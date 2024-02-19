import { Request, Response } from "express";
import { TestFields } from "../models/TestFields";

export const addTestFieldsHandler = async (req: Request, res: Response) => {
  const testfields = new TestFields(req.body);
  const response = await testfields.add();
  return res.status(200).json(response);
};
