const express = require('express');
const cors = require('cors');
const path = require('path');
const userRouter = require('./router/user')

const PORT = process.env.PORT || 4000;
const app = express();

app.use('/', express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/auth', userRouter)


app.listen(PORT, () => {
    console.log(`The server is listening in the port: ${PORT}`);
})