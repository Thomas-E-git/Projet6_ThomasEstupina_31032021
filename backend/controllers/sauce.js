//////importation des modules Sauce (modèle de sauce) et fs (géstion des fichiers)//////
const Sauce = require('../models/Sauce');
const fs = require('fs');

/////////////////// Controllers des différentes routes de l'application /////////////////
exports.getAllSauces = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(404).json({ error }));
};

exports.createSauce = (req, res, next) => {
    // Récupération et parse de l'objet sauce via form //
    const sauceObject = JSON.parse(req.body.sauce);
    // suppréssion de l'ID(non inclus dans le modèle sauce) //
    delete sauceObject._id;
    const sauce = new Sauce({
        ...sauceObject,
        // Création de l'URL de l'image importée par l'utilisateur //
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        // Initialisation des paramètres de like - dislike //
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: [],
    });
    // Sauvegarde de la nouvelle sauce dans la base de donnée //
    sauce.save()
        .then(() => res.status(201).json({ message: "Sauce enregistrée"}))
        .catch(error => res.status(400).json({ error }));
};

exports.modifySauce = (req, res, next) => {
    const sauceObject = req.file ?
    {
        // Paramétrage de la sauce si la modification inclut une image //
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    // Récupération de la requête si la modification n'inclut pas d'image //
    } : { ...req.body };
    // Modification et sauvegarde de la sauce dans la base de donnée //
    Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id }, { runValidators: true })
        .then(()=> res.status(200).json({ message: "Sauce mise à jour avec succès" }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            // Suppréssion de l'image dans le dossier images avec fs//
            const filename = sauce.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                // Suppréssion de la sauce //
                Sauce.deleteOne({ _id: req.params.id })
                    .then(()=> res.status(200).json({ message: "Sauce supprimée" }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

exports.likeSauce = (req, res, next) => {
    like = req.body.like;
    userId = req.body.userId;
    if (like == 1) {
        // si like = 1 dans la requête, l'utilisateur like la sauce
        // son ID est ajouté au tableau usersLiked
        // le compteur de likes est incrémenté de 1 
        Sauce.findOne({ _id: req.params.id })
            .then(sauce => {
                sauce.usersLiked.push(userId);
                sauce.likes += 1;
                sauce.save()
                    .then(() => res.status(201).json({ message: "Sauce likée"}))
                    .catch(error => res.status(400).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));          
    } else if (like == 0) {
        // si like = 0 dans la requête, l'utilisateur unlike ou undislike la sauce
        // son ID est supprimé du tableau usersLiked ou usersDisliked
        // le compteur de likes ou de dislikes est diminué de 1 
        Sauce.findOne({ _id: req.params.id })
            .then(sauce => {
                if(sauce.usersLiked.indexOf(userId) !== -1){
                    var index = sauce.usersLiked.indexOf(userId);
                    sauce.usersLiked.splice(index, 1);
                    sauce.likes -= 1;
                    sauce.save()
                        .then(() => res.status(201).json({ message: "Sauce unlikée"}))
                        .catch(error => res.status(400).json({ error }));
                } else {
                    var index = sauce.usersDisliked.indexOf(userId);
                    sauce.usersDisliked.splice(index, 1);
                    sauce.dislikes -= 1;
                    sauce.save()
                        .then(() => res.status(201).json({ message: "Sauce undislikée"}))
                        .catch(error => res.status(400).json({ error }));
                };
            })  
            .catch(error => res.status(500).json({ error }));
    } else {
        // sinon, like = -1 dans la requête, l'utilisateur dislike la sauce
        // son ID est ajouté au tableau usersDisliked
        // le compteur de dislikes est incrémenté de 1 
        Sauce.findOne({ _id: req.params.id })
            .then(sauce => {
                sauce.usersDisliked.push(userId);
                sauce.dislikes += 1;
                sauce.save()
                    .then(() => res.status(201).json({ message: "Sauce dislikée"}))
                    .catch(error => res.status(400).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));
    };
}
