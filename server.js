const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const router = require('./routers/contact');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve only static files like thankyou.html
app.use(express.static(__dirname));

// ✅ API routes
app.use('/api/contact', router);

// Optional: Root fallback (optional)
app.get('/', (req, res) => {
  res.send('Backend is running. No index.html or images are served.');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));