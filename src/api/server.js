require('dotenv').config();

const express = require('express'),
    mongoose = require('mongoose'),
    User = require('./app/models/user'),
    path = require('path');

// Create app
const app = express();

// For all the POST form
app.use(express.urlencoded({ extended: true }));

//Parse all body from the POST form as JSON
app.use(express.json());


// Define the view engine
//app.set('views',  path.join(__dirname, 'app', 'views')); // Par défaut, EJS cherche un dossier 'views' à la racine et nous l'avons placé dans un dossier 'app'
//app.set('view engine', 'ejs');

// Connect the DB
mongoose.connect('mongodb+srv://jonathan:instagram@instagramcluster-irleu.ua2wt.mongodb.net/instagram?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true})

//Manage all the routes
require('./app/routes/router')(app);

// Define default routes
app.get('/errors', (req, res, next) => {
    return res.render('errors');
});

app.use((req, res, next) => {
    return res.redirect('/publications');
});

// Check if we have a user in DB else add one
//Const User = require('./app/models/user');
User
    .find()
    .exec((err, users) => {
        if(err) {
            return console.error(err);
        }

        if(users.length === 0) {
            new User({
                username: 'JonathanL',
                email: 'contact@jonathanlachaud.fr',
                firstname: 'Jonathan',
                lastname: 'LACHAUD'
            }).save();
        }
    });

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});