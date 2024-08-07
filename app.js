const express = require('express');
const propertyRoutes = require('./routes/propertyRoutes');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');


const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// CORS configuration


// Routes
app.use('/api/v1/rent/listing', propertyRoutes);
app.use('/api/v1/rent/user', userRoutes);

// Export the app module
module.exports = app;
