const express = require('express');
const mongoose = require('mongoose');
const propertyRoutes = require('./routes/propertyRoutes');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Enable CORS for all routes
app.use(cors({
  origin: 'https://homely-hub-seven.vercel.app', // Replace with your frontend Vercel domain
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Use property routes
app.use('/api/v1/rent/listing', propertyRoutes);

// Use user routes
app.use('/api/v1/rent/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
