import { Request, Response } from "express";

export const logoutHandler = async (req: Request, res: Response) => {
  const response = {
    succeeded: true,
  };

  req.session!.token = null;

  console.log("Logout", req.session);
  return res.status(200).json(response);
};
