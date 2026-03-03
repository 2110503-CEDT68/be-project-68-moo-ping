const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');

const hotels = require("./routes/hotels");
const users = require("./routes/auth");
const appt = require("./routes/appointments");

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Query parser
app.set("query parser", "extended");
// Body parser
app.use(express.json());
// Cookie parser
app.use(cookieParser());

// Route files
app.use("/api/v1/hotels", hotels);
app.use("/api/v1/auth", users);
app.use("/api/v1/appointments", appt);


const PORT = process.env.PORT || 5050;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});

