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

        const user = await User.findOne({ where: {email: email}});
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
                userId: (user.id).toString(),
                token: user.token
            }

            res.status(201).send(dataRes)
        }
         res.sendStatus(400)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


exports.deleteUser = async(req, res) => {
    const { id } = req.params;

    try {
        const removedUser = await User.remove({ id: id });
        res.status(201).send(removedUser)
    } catch (error) {
        res.status(500).send(error)
    }
}