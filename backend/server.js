const express = require('express');
const cors = require('cors');
const path = require('path');
const userRouter = require('./router/user');
const postRouter = require('./router/post');
const commentRouter = require('./router/comment');
const userPostRouter = require('./router/userPost');


const app = express();
const PORT = 4000;

app.use('/', express.static(path.join(__dirname, 'static')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/auth', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/comments', commentRouter);
app.use('/api/userPost', userPostRouter);


app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`)
});