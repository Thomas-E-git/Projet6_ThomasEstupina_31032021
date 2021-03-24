const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const validator = require('mongoose-validator');


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: [
            validator({
                validator: 'isEmail',
                message: 'Veuillez entrer un email valide'
            })
        ],
    },
    password: {
        type: String, 
        required: true,
    }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);