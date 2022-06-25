const express = require('express');
const cors = require('cors');
const path = require('path');
const userRouter = require('./router/user')

const POST = process.env.POST || 4000;
const app = express();

app.use('/', express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.listen(POST, () => {
    console.log(`The server is listening in the port: ${PORT}`);
})