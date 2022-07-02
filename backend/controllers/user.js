const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = db.user


exports.registerUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        
        if (!(email && password)) {
            res.status(400).send('All input fields required');
        }

        const olderUser = await User.findOne({where: {email: email}});

        if (olderUser) {
            return res.status(409).send('This user is already registered, Please login');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

         const user = await User.create({
            email: email.toLowerCase(),
            password: hashedPassword
        })
                
        const token = jwt.sign(
            { user_id: user.id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: '7h'
            })
         
           user.token = token

        res.status(201).send(user);
        
    } catch (error) {
        res.status(500).send(error.message)
   }
      
}

exports.loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send('All input field is required');
        }

        const user = await User.findOne({ email });
        const validPassword = await bcrypt.compare(password, user.password);

        if (user && validPassword) {
            const token = jwt.sign({
                user_id: user.id,
                email
            },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '7h'
                }
            );

            user.token = token;

            const dataRes = {
                userId: user.id,
                token: user.token
            }

            res.status(201).send(dataRes)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}