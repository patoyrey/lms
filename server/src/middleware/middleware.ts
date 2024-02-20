import { NextFunction, Request, Response } from "express";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Session", req.session);
  // if()
  // {
  //     return res.status(401).json({msg:"Unauthorized!"})
  // }
  // else{
  //     next()
  // }
};
