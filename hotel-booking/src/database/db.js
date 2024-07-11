// src/database/db.js

const mysql = require('mysql2');

// Création de la connexion à MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // Votre nom d'utilisateur MySQL
  password: '',         // Votre mot de passe MySQL (laissez vide si aucun)
  database: 'hotel_booking', // Le nom de votre base de données MySQL
});

// Tester la connexion
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL :', err);
    return;
  }
  console.log('Connexion à MySQL réussie.');
});

module.exports = connection;
