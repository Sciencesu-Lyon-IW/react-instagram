const express = require('express');
const favicon = require('serve-favicon');

const app = express();

// Pour les formulaires POST
app.use(express.urlencoded({ extended: true }));

// Pour les requêtes API ou AJAX
app.use(express.json());

// Pour mettre à dispo des fichiers statiques
app.use(express.static(__dirname + '/public'));



// http://localhost:8080
app.get('/', (req, res) => {
    res.send('Accueil');
});

// http://localhost:8080/Thomas/CHEVALIER
app.get('/:firstname/:lastname', (req, res) => {
    res.send(`Bonjour ${firstname} ${lastname}, comment allez-vous ?`);
});

// Cas par défaut si les autres urls n'ont pas matché
// http://localhost:8080/toto
app.use((req, res) => {
    res.status(404);
    res.send('Page Introuvable');
});

app.listen(8080, () => {
    console.log('Le serveur est démarré sur le port 8080 !');
});