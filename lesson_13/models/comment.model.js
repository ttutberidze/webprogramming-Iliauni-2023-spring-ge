const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
        description: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Post'
        }
    },
);

const CommentModel = mongoose.model('Comment', commentSchema)

module.exports = CommentModel