const nodemailer = require('nodemailer');
require('dotenv').config();

const Contact = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // ✅ Configure the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS, // Make sure this is an App Password
    },
  });

  // ✅ Email options
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `Contact from Portfolio: ${subject || 'No Subject'}`,
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

    // ✅ Send JSON response for fetch() to handle
    res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (err) {
    console.error('❌ Mail error:', err);

    // ✅ Respond with error message
    res.status(500).json({ success: false, message: 'Server error: email not sent' });
  }
};

module.exports = { Contact };
