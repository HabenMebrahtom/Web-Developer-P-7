const express = require('express');
const userRouter = express.Router();
const userControllers = require('../controllers/user');
const auth = require('../middleware/auth')

userRouter.get('/:id', userControllers.getUser);
userRouter.post('/signup', userControllers.registerUser);
userRouter.post('/login', userControllers.loginUser);
userRouter.delete('/delete/:id', userControllers.deleteUser);

module.exports = userRouter;