const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'rey_patoy@bpoc.co.jp',
        pass: 'philippinesES',
    },
    secure: true,
})

export async function sendEmail(to?: string, token?: string) {
    const mailData = {
        from: 'rey_patoy@bpoc.co.jp',
        to,
        subject: 'Password Reset',
        html: `<b>Hey there! </b>
        <br> Your here to reset password link: <a href='http://localhost:3000/reset-password?token=${token}'>http://localhost:3000/reset-password?token=${token}</a><br/>`,
    }
    await transporter.sendMail(mailData, (err: any, info: any) => {
        if (err)
            console.log(err)
        else
            console.log(info);
    })
}