const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Importez les fichiers de route
const userRoutes = require('./routes/users');
const tipsRoutes = require('./routes/tips');
const serviceRoutes = require('./routes/services');
const adminRoutes = require('./routes/admin');

const app = express();

// Connexion à la base de données
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log('Connecté à la base de données')
);

// Middleware
app.use(bodyParser.json());

// Utilisez les fichiers de route
app.use('/api/users', userRoutes);
app.use('/api/tips', tipsRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/admin', adminRoutes);

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur en écoute sur le port ${port}`));
