const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const { authSecret } = require('../config/config');



const login = async (req, res) => {
    try {
        const {
            email, password
        } = req.body;
        
        const user = await User.findOne({email});
        console.log(user);
        if(!user) {
            return res.status(401).json({message: 'Invalid credentials'});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            return res.status(401).json({message: 'Invalid credentials'});
        }

        const accessToken = jwt.sign({
            id: user._id,
            email: user.email,
            // password: user.password,
        }, authSecret, {expiresIn: '1d'})

        return res.status(200).json({
            accessToken
        })

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const register = async (req, res) => {
    try {
        const {
            email, password, name
        } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({email, password: hashedPassword, name});

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports={login, register}