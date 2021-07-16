const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    followers : {
        type: Object,
        required: false,
        followed: {
            creatorId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
        }
    },
    follows : {
        type: Object,
        required: false,
        followed: {
            creatorId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
        }
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema, 'users');