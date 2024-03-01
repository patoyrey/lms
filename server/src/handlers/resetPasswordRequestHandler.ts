import { Request, Response } from "express";
import { resetPasswordRequest } from "../interface/resetPasswordRequestInterface";
import { loginQuery } from "../utils/QueryFields";
import { jwtToken } from "../jwt/jwttoken";
import { ResetPasswordService } from "../service/resetPasswordService";
import { sendEmail } from "../service/mailService";

export const resetPasswordRequestHandler = async (req: Request, res: Response) => {
    const { email } = req.body as unknown as resetPasswordRequest
    let token = ""
    const query = `select * from user where email = ?`
    await loginQuery(query, [email])
        .then((result: any) => {
            if (result.length > 0) {
                token = jwtToken(result[0].user_id, email)
            } else {
                return res.status(404).json({ message: "Email Not Found" })
            }
        })
        .catch((error: any) => {
            return res.status(404).json({ message: error })
        })
    ResetPasswordService.init(new Date(), email, token)
    await sendEmail(email, token)
    //await new Promise((resolve: any) => setTimeout(resolve, 10000))
    return res.status(200).json({ message: "Email sent successfully! Please Open your email and click the link to reset your password" })
};
