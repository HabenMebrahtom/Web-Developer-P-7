const express = require('express');
const postRouter = express.Router();
const postControllers = require('../controllers/post');
const commentControllers = require('../controllers/comment');
const auth = require('../middleware/auth');
const upload = require('../middleware/multerConfig')

//post controllers

postRouter.get('/:id', auth, postControllers.getSinglePost);
postRouter.get('/', auth, postControllers.getAllPosts);
postRouter.post('/', auth, upload, postControllers.createPost);
postRouter.put('/:id', auth, upload, postControllers.updatePost);
postRouter.delete('/:id', auth, postControllers.deletePost);


//Comment controllers

postRouter.get('/comments', commentControllers.getAllComments);
postRouter.post('/addComment/:id', commentControllers.createComment);

//get post comment

postRouter.get('/postComment/:id', auth, postControllers.getPostComment)

module.exports = postRouter;