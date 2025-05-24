const nodemailer = require('nodemailer');

const transporter = process.env.SENDGRID_API_KEY
  ? nodemailer.createTransport({
      service: 'SendGrid',
      auth: { api_key: process.env.SENDGRID_API_KEY }
    })
  : nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

module.exports.send = async (to, subject, html) =>
  transporter.sendMail({ from: 'no-reply@jobdrop.local', to, subject, html });
