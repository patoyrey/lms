import { Request, Response } from "express";
import { ResetPassword } from "../interface/resetPasswordInterface";
import { ResetPasswordService } from "../service/resetPasswordService";
import { User } from "../models/User";

export const resetPasswordHandler = async (req: Request, res: Response) => {
    const { newPassword, token } = req.body as unknown as ResetPassword
    if (ResetPasswordService.isTokenValid(token)) {
        const email = ResetPasswordService.getEmail()
        const result = await User.resetPassword(newPassword, email)

        return res.status(200).json(result)

    } else {
        return res.status(400).json({ message: 'Invalid Token' })
    }
}