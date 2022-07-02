const express = require('express');
const userRouter = express.Router();
const userControllers = require('../controllers/user')

//userRouter.use('/signup', userControllers.registerUser)
//userRouter.use('/login')

module.exports = userRouter;