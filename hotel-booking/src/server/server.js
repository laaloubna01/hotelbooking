// src/server/server.js

const express = require('express');
const app = express();
const connection = require('../database/db');

// Route d'exemple pour tester la connexion à la base de données
app.get('/hotels', (req, res) => {
  connection.query('SELECT * FROM hotels', (err, results, fields) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      res.status(500).send('Erreur lors de la récupération des hôtels.');
      return;
    }
    res.json(results);
  });
});

// Port d'écoute du serveur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serveur Node.js démarré sur le port ${port}`);
});
