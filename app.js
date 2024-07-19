const express = require('express');
const propertyRoutes = require('./routes/propertyRoutes');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// CORS configuration
app.use(cors({
  origin: 'https://homely-hub-seven.vercel.app', // Replace with your frontend Vercel domain
  credentials: true,
}));

// Routes
app.use('/api/v1/rent/listing', propertyRoutes);
app.use('/api/v1/rent/user', userRoutes);

// Export the app module
module.exports = app;
