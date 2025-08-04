const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const contactRouter = require('./routers/contact');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (like thankyou.html)
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/', contactRouter);

// Optional fallback
app.get('/', (req, res) => {
  res.send('Backend is running. No index.html found.');
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
