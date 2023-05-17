const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
})

const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/user-management');
        const user = new User({
            name: 'James',
            age: '30',
            address: {
                city: 'Tbilisi'
            }
        })
        await user.save()
    } catch(error) {
        console.log(error.message)
    }
}

main();