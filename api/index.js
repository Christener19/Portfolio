import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config({ path: '.env.local'});

const staticPath = path.join(__dirname, "../Client");

const app = express();

pp.use(express.static(staticPath));
const port = process.env.PORT


const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  port: 587
});
console.log(process.env.EMAIL)
console.log(process.env.PASSWORD)

app.use(cors());
app.use(bodyParser.json());


app.post('/api/contact', (req, res) => {
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
