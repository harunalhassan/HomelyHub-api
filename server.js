const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE_LOCAL || process.env.DATABASE_PRODUCTION;

const corsConfig = {
  origin: 'https://homely-hub-seven.vercel.app', // Replace with your frontend Vercel domain
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.options('*', cors(corsConfig));
app.use(cors(corsConfig));

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB connection successful');
}).catch((err) => {
  console.error('DB connection error:', err);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
