const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import routes
const tipsRoute = require('./routes/tips');
const servicesRoute = require('./routes/services');
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB')
);

// Middleware
app.use(express.json());

// Route middlewares
app.use('/api/tips', tipsRoute);
app.use('/api/services', servicesRoute);
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);

app.listen(3000, () => console.log('Server is running on port 3000'));
