import { Request, Response } from "express";

export const checkAuthHandler = async (req: Request, res: Response) => {
  const response = {
    succeeded: true,
  };

  console.log(response);
  return res.status(200).json(response);
};
