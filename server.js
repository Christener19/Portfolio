import express from 'express';
import { urlencoded } from 'body-parser';
import nodemailer from 'nodemailer';
require('dotenv').config();

const app = express();
const port = 3000;

app.use(urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const mailOptions = {
    to: process.env.EMAIL,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }

    console.log('Email sent:', info.response);
    return res.send('Form submitted successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
