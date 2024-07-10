const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const propertyRoutes = require('./routes/propertyRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors({
  origin: 'https://homely-hub-seven.vercel.app', // Ensure this matches your frontend URL
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/rent/listing', propertyRoutes);
app.use('/api/v1/rent/user', userRoutes);

module.exports = app;

