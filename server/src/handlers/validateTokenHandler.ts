import { Request, Response, json } from "express";
import { ResetPasswordService } from "../service/resetPasswordService";

export const validateTokenHandler = async (req: Request, res: Response) => {
    const token = req?.body?.token
    if (ResetPasswordService.isTokenValid(token)) {
        return res.status(200).json({
            message: "Valid"
        })
    }
    return res.status(400).json({ message: "Invalid" })
};