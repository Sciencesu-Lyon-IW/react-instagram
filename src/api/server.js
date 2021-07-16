require('dotenv').config();

const express = require('express'),
    mongoose = require('mongoose'),
    User = require('./app/models/user'),
    cors = require('cors'),
    path = require('path');

// Create app
const app = express();


//Prevent cors policy errors
app.use(cors());

// For all the POST form
app.use(express.urlencoded({ extended: true }));

//Parse all body from the POST form as JSON
app.use(express.json());


// Connect the DB
mongoose.connect('mongodb+srv://jonathan:instagram@instagramcluster-irleu.ua2wt.mongodb.net/instagram?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true})

//Manage all the routes
//require('./app/routes/router')(app);
require('./app/routes/publications')(app)
require('./app/routes/user')(app)


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

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});