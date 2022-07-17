const express = require('express');
const postRouter = express.Router();
const postControllers = require('../controllers/post')


postRouter.get('/', postControllers.getAllPosts);
postRouter.post('/', postControllers.createPost);
postRouter.put('/:id', postControllers.updatePost);
postRouter.delete('/:id', postControllers.deletePost);


module.exports = postRouter;