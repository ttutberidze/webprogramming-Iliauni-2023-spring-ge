const mongoose = require('mongoose');
const User = require('./models/User');
const Task = require('./models/Task');

const createTask = async (userId, name) => {
    const task = await (new Task({name})).save();
    await User.findOneAndUpdate(userId, {$push: {tasks: task._id}})
    return task._id;
}

const createUser = async (name) => {
    const user = new User({name});
    return await user.save(); 
}

const main = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/task-management');
        const user = await createUser('Temo');
        
        await createTask(user._id, 'Go to shop1');
        await createTask(user._id, 'Go to shop2');
        await createTask(user._id, 'Go to shop3');
        await createTask(user._id, 'Go to shop4');
        
        const users = await User.find().populate('tasks')
        console.log(users.map(({tasks}) => tasks));

    } catch(error) {
        console.log(error.message)
    }
}

main();