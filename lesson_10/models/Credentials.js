const mongoose = require('mongoose');

const CredentialsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const Credentials = mongoose.model('CredentialsField', CredentialsSchema)

module.exports = {
    Credentials, CredentialsSchema
};