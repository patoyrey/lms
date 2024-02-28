import axios from "axios";
import { Email } from "../interface/emailInterface";
import { PasswordReset } from "../interface/passwordResetInterface";

export class PasswordResetService {
    static baseUrl = "http://localhost:5000/api/";
    public static resetPassword(token: string, newPassword: string) {
        return new Promise((resolve, reject) => {
            axios.post(`${PasswordResetService.baseUrl}/reset-password`, { newPassword, token } as PasswordReset).then((result) => {
                resolve(result)
            }).catch((error) => reject(error))
        })
    }
    public static validateToken(token: string) {
        return new Promise((resolve, reject) => {
            axios.post(`${PasswordResetService.baseUrl}/validate-token`, { token } as PasswordReset).then((result) => {
                resolve(result)
            }).catch((error) => reject(error))
        })
    }
}