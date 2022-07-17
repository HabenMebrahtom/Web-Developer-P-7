const express = require('express');
const userRouter = express.Router();
const userControllers = require('../controllers/user')


userRouter.post('/signup', userControllers.registerUser);
userRouter.post('/login', userControllers.loginUser);
userRouter.delete('/:id', userControllers.deleteUser);


module.exports = userRouter;