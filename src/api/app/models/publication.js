const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true,
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created_at: {
        type: Date,
        required: false
    },
    edited_at: {
        type: Date,
        required: false
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Publication', publicationSchema, 'publications');