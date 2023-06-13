const express = require('express')
const router = express.Router()

const {createPost, createComment, getPostComments, getPosts, getPost} = require('../controllers/post.controller')

router.route('/:postId/comments').post(createComment).get(getPostComments)
router.route('/:postId').get(getPost)
router.route('/').post(createPost).get(getPosts)

module.exports = router