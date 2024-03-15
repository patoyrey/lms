import { Request, Response } from "express";
import { Hmo } from "../models/Hmo";

export const deleteHmoHandler = async (req: Request, res: Response) => {
  const id = req.params.hmoId;
  const hmo = new Hmo(req.body);
  const response = await hmo.delete(id);
  return res.status(200).json(response);
};
