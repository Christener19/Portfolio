import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config({ path: '.env.local'});

const staticPathHomepage = path.join(__dirname, "../Client/Homepage");
const staticPathMoreInformation = path.join(__dirname, "../Client/MoreInformation");

const app = express();

app.use(express.static(staticPathHomepage));
app.use('/MoreInformation', express.static(staticPathMoreInformation));

const port = process.env.PORT


const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  port: 587
});

app.use(cors());
app.use(bodyParser.json());


app.post('/contact', (req, res) => {
    console.log('Received a contact form submission:', req.body);
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

app.get('/MoreInformation/bootcampInfo.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/MoreInformation/Bootcamp kitchen/bootcampInfo.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
