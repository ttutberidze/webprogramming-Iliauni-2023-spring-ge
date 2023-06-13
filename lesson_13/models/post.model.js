const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, 'გთხოვთ მიუთითოთ']
        },
        description: {
            type: String,
            required: [true, 'გთხოვთ მიუთითოთ']
        },
    }
);

const postModel = mongoose.model('Post', postSchema);
module.exports = postModel