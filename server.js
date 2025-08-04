const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRouter = require('./routers/contact');
const path = require('path');

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors({
  origin: 'https://portfolio-frontend-eqx2.vercel.app', // ✅ Your actual deployed frontend
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Root Route
app.get('/', (req, res) => {
  res.send('✅ API is running.');
});

// ✅ API Routes
app.use('/api/contact', contactRouter);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

module.exports = app;
