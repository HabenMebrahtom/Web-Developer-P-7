const express = require('express');
const userRouter = express.Router()

userRouter.use('/signup')
userRouter.use('/login')

module.exports = userRouter;