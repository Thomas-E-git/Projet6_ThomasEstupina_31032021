const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');


exports.signup = (req, res, next) => {
    var re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,})$/;
    var password = req.body.password;
    if (re.test(password)) {
        // hash du mot de passe utilisateur avec bcrypt //
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: "Utilisateur crée" }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
        }
    else (res.status(400).json({ message: "le mot de passe doit contenir au moins 8 caractères, avec au moins une majuscule, une minuscule, un chiffre et un caractère spécial" }))
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    //////// Vérification de l'authentification /////////
        .then(user => {
            if (!user) {
                return res.status(401).json({ error });
            }
            // fonction compare de bcrypt pour vérifier que le mdp et l'email de l'utilisateur
            // correspondent à ceux entrés lors de l'inscription
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error });
                    }
                    res.status(200).json({
                        // Renvoie le user ID correspondant à l'utilisateur //
                        userId: user._id,
                        // Signature du token de l'utilisateur pour une session //
                        token: jwt.sign(
                            { userId: user._id },
                            'TOKEN_SECRET_KEY_OC_PROJECT_6',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};
