import { Request, Response } from "express";

export const logoutHandler = async (req: Request, res: Response) => {
  const response = {
    succeeded: true,
  };

  res.clearCookie("jwt");
  res.clearCookie("jwt.sig");
  return res.status(200).json(response);
};
