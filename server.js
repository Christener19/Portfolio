import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = 3000;


const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL ,
    pass: process.env.PASSWORD,
  },
  port: 587
});

app.use(cors());
app.use(bodyParser.json());


app.post('/contact', (req, res) => {
    console.log(req.body)
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
