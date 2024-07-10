const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config({ path: './config.env' });

const app = express();
const port = process.env.PORT || 3000;
const DB_LOCAL = process.env.DATABASE_LOCAL;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(DB_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
// Example route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Favicon
app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/favicon.png', express.static(path.join(__dirname, 'public', 'favicon.png')));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
