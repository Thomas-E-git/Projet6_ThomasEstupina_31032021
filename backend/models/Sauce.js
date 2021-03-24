const mongoose = require('mongoose');
const validator = require('mongoose-validator');

const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: {
        type: String,
        required: true,
        validate: [
            validator({
                validator: 'matches',
                arguments: /^[^@&()_$*€£`+=\/?#]+$/,
                message: 'le champ ne doit pas contenir de caractères spéciaux'
            })
        ],
    },
    manufacturer: {
        type: String,
        required: true,
        validate: [
            validator({
                validator: 'matches',
                arguments: /^[^@&()_$*€£`+=\/?#]+$/,
                message: 'le champ ne doit pas contenir de caractères spéciaux'
            })
        ],
    },
    description: {
        type: String,
        required: true,
        validate: [
            validator({
                validator: 'matches',
                arguments: /^[^&$*€£`+=\/?#]+$/,
                message: 'le champ ne doit pas contenir de caractères spéciaux'
            })
        ],
    },
    mainPepper: {
        type: String,
        required: true,
        validate: [
            validator({
                validator: 'matches',
                arguments: /^[^@&()_$*€£`'+=\/?#]+$/,
                message: 'le champ ne doit pas contenir de caractères spéciaux'
            })
        ],
    },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    usersLiked: { type: [String], required: true },
    usersDisliked: { type: [String], required: true },
});

module.exports = mongoose.model('Sauce', sauceSchema);