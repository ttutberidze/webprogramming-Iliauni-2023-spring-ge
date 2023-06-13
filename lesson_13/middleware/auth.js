const jwt = require('jsonwebtoken');
const { authSecret } = require('../config/config');

const authMiddleware = async (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].replace('Bearer ', '');
    if(!token) {
        return res.status(401).json({message: 'Access token is missing'})
    }
    const user = jwt.verify(token, authSecret);
    if(!user) {
        return res.status(401).json({message: 'Token is invalid'})
    }
    req.user = user;
    next();
}

module.exports = {authMiddleware}