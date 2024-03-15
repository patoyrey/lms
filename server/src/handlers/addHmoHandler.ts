import { Request, Response } from "express";
import { Hmo } from "../models/Hmo";

export const addHmoHandler = async (req: Request, res: Response) => {
  const hmo = new Hmo(req.body);
  const response = await hmo.add();
  return res.status(200).json(response);
};
