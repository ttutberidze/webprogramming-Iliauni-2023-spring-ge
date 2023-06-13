
const Post = require('../models/post.model')
const Comment = require('../models/comment.model')

const createPost = async (req, res) => {
    try {
        const {description, title} = req.body

        if (!description) {
            return res.status(400).json({
                message:'გთხოვთ მიუთითოთ სწორი პარამეტრები'
            });
        }

        const post = await Post.create({description, title})

        return res.json(post);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const createComment = async (req, res) => {
    try {
        const {postId} = req.params;
        const {description} = req.body

        if (!description) {
            return res.status(400).json({
                message:'გთხოვთ მიუთითოთ სწორი პარამეტრები'
            });
        }

        const comment = await Comment.create({description, postId, author: req.user.id})

        return res.json(comment);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()

        return res.status(200).json(posts)
    } catch (error) {
        return res.status(200).json(error.message)
    }
}

const getPostComments = async (req,res) => {
    try {
        const {postId} = req.params;      

        const comments = await Comment.find({postId}).populate('author')

        return res.status(200).json(comments)
    } catch (error) {
        return res.status(200).json(error.message)
    }
}

const getPost = async (req, res) => {
    const {postId} = req.params;
    try {
        const posts = await Post.findOne({_id: postId})

        return res.status(200).json(posts)
    } catch (error) {
        return res.status(200).json(error.message)
    }
}

module.exports={createPost, createComment, getPosts, getPostComments, getPost}