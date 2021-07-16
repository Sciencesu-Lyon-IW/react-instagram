const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true,
    },
    imgUrl: {
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
        required: false,
    },
    edited_at: {
        type: Date,
        required: false
    },
    likes : {
        type: Array,
        required: false,
        liked: {
            type: Array,
            required: false,
            creatorId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
        }
    } ,




}, {
    timestamps: true
});

module.exports = mongoose.model('Publication', publicationSchema, 'publications');