const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // Vérifie si le userId contenu dans le token de la requête 
        // est le même que le userId correspondant à l'utilisateur
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'TOKEN_SECRET_KEY_OC_PROJECT_6');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw "User ID non valable";
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error | "Requête non authentifiée" });
    }
};