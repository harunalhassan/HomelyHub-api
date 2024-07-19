const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const serverless = require('serverless-http');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE_LOCAL || process.env.DATABASE_PRODUCTION;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB connection successful');
}).catch((err) => {
  console.error('DB connection error:', err);
});

// Use the environment variable for the port, or default to 8000
const port = 8000;

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
module.exports.handler = serverless(app);