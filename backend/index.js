const express = require('express');
const dotenv = require('dotenv');          // ✅ Import dotenv
const connectDB = require('./config/database');  // ✅ Import MongoDB connect function

dotenv.config();      // ✅ Load environment variables from .env file FIRST

connectDB();          // ✅ THEN connect to MongoDB using MONGO_URI from .env

const app = express();

app.get('/', (req, res) => {
  res.send('API is perfectly running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
