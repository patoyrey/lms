import { Request, Response } from "express";
import { Hmo } from "../models/Hmo";

export const updateHmoHandler = async (req: Request, res: Response) => {
  const id = req.params.hmoId;
  const hmo = new Hmo(req.body);
  const response = await hmo.update(id);
  return res.status(200).json(response);
};
