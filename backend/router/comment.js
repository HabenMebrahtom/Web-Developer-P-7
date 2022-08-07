const express = require('express');
const commentRouter = express.Router();
const auth = require('../middleware/auth');
const commentControllers = require('../controllers/comment');




commentRouter.post('/:id', auth, commentControllers.createComment);


module.exports = commentRouter;