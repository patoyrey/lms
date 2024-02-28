export class ResetPasswordService {
    public static createAt = new Date('01/01/1970')
    public static email = ""
    public static token = ""
    // store data
    public static init(tokenCreatedAt: Date, userEmail: string, userToken: string) {
        this.createAt = tokenCreatedAt
        this.email = userEmail
        this.token = userToken
    }

    public static isTokenValid(userToken: string): boolean {
        if (userToken === this.token) {
            const currentTimeStamp = new Date()
            const differenceInMilliseconds: number = Math.abs(currentTimeStamp.getTime() - this.createAt.getTime())
            const differenceInMinutes: number = differenceInMilliseconds / (1000 * 60)

            return differenceInMinutes <= 20
        }
        return false
    }
    public static getEmail() {
        return this.email
    }
}