const express = require('express');
const userRouter = express.Router();
const userControllers = require('../controllers/user')
const auth = require('../middleware/auth');

userRouter.get('/', auth, userControllers.getAllUsers);
userRouter.get('/:id', auth, userControllers.getSingleUser);
userRouter.post('/signup', userControllers.registerUser);
userRouter.post('/login', userControllers.loginUser);
userRouter.delete('/:id', auth, userControllers.deleteUser);


module.exports = userRouter;