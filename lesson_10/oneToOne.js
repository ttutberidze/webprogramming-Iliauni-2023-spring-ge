const mongoose = require('mongoose');
const User = require('./models/User');
const {Credentials} = require('./models/Credentials');

const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/task-management');
        
        const credentials = new Credentials({
            email: 'tes@test.com',
            password: '1234'
        })

        const savedCredentials = await credentials.save();
        console.log(savedCredentials);
        const user = new User({
            name: 'James',
            age: '30',
            credentialsId: savedCredentials._id,
            credentials: savedCredentials
        })
        await user.save()
        const users = await User.find().populate('credentialsId');
        console.log(users);

    } catch(error) {
        console.log(error.message)
    }
}

main();