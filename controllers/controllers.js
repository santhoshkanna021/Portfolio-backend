const nodemailer = require('nodemailer');
require('dotenv').config();

const Contact = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // ✅ Setup transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // ✅ Mail options
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `Contact from Portfolio: ${subject}`,
    replyTo: email,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);

    // ✅ If you're submitting from a form and want to redirect:
    res.status(200).redirect('/thankyou.html');

    // ✅ If you're using fetch() or Axios on frontend, you should return JSON instead:
    // res.status(200).json({ message: 'Message sent successfully' });

  } catch (err) {
    console.error('Mail error:', err.message);
    res.status(500).send('Something went wrong. Please try again later.');
  }
};

module.exports = { Contact };
