const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE_LOCAL || process.env.DATABASE_PRODUCTION;

app.use(cors({
  origin: 'https://homely-hub-seven.vercel.app', // Replace with your frontend Vercel domain
  credentials: true,
  methods:["GET","POST","PUT","DELETE"],
}));

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB connection successful');
}).catch((err) => {
  console.error('DB connection error:', err);
});

// Use the environment variable for the port, or default to 8000
const port =8000;

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
