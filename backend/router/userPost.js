const express = require('express');
const userPostRouter = express.Router();
const userPostControllers = require('../controllers/userPost')
const auth = require('../middleware/auth');

userPostRouter.post('/:id', auth, userPostControllers.addUserId);



module.exports = userPostRouter;