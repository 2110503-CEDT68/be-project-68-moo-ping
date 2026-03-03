const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const hotels = require("./routes/hotels");

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Query parser
app.set("query parser", "extended");
// Body parser
app.use(express.json());

// Route files
app.use("/api/v1/hotels", hotels);


const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

