const express = require('express');
const postRouter = express.Router();
const postControllers = require('../controllers/post');
const auth = require('../middleware/auth');
const upload = require('../middleware/multerConfig')


postRouter.get('/', auth, postControllers.getAllPosts);
postRouter.post('/', auth, upload, postControllers.createPost);
postRouter.put('/:id', auth, upload, postControllers.updatePost);
postRouter.delete('/:id', auth, postControllers.deletePost);


module.exports = postRouter;