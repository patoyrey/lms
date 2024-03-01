const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_HOST,
        pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
})

export async function sendEmail(to?: string, token?: string) {
    const mailData = {
        from: process.env.EMAIL_HOST,
        to,
        subject: 'Password Reset',
        html: `<b>Hey there! </b>
        <br> Your here to reset password link: <a href='http://localhost:3000/reset-password?token=${token}'>http://localhost:3000/reset-password?token=${token}</a><br/>`,

        // <br> Click this link to reset your password: </br> <br><a href='http://localhost:3000/reset-password?token=${token}'>http://localhost:3000/reset-password?token=${token}</a></br>`,
    }
    await transporter.sendMail(mailData, (err: any, info: any) => {
        if (err)
            console.log(err)
        else
            console.log(info);
    })
}