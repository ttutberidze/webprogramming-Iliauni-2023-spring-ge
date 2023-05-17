const mongoose = require('mongoose');
const {CredentialsSchema} = require('./Credentials');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    credentialsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CredentialsField'
    },
    credentials: {
        type: CredentialsSchema
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ]
})

module.exports = User;