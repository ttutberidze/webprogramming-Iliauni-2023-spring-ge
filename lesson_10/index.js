const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: Number
})

const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/task-management');
        const user = new User({
            name: 'James',
            age: 'asdasd'
        })
    await user.save()
    } catch(error) {
        console.log(error.message)
    }
}

main();