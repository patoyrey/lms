import axios from "axios";
import { Email } from "../interface/emailInterface";

export class EmailService {
    static baseUrl = "http://localhost:5000/api";
    public static validateEmail(email: string) {
        return new Promise((resolve, reject) => {
            axios.post(`${EmailService.baseUrl}/reset-password-request`, { email } as Email).then((result) => {
                resolve(result)
            }).catch((error) => reject(error))
        })
    }
}