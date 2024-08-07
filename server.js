const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE_LOCAL || process.env.DATABASE_PRODUCTION ;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB connection successful');
}).catch((err) => {
  console.error('DB connection error:', err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
