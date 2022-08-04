const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();



const User = require('../models/user');
const Post = require('../models/post');


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send(users);
    } catch(error) {
        res.status(404).send(error.message);
   }
}

exports.getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({ where: { id: id } });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).send(error.message)
    }
}


exports.registerUser = async(req, res) => {
       try {
        const { name, email, password } = req.body;
        
        if (!(name && email && password)) {
            res.status(400).send('All input fields required');
        }

        const olderUser = await User.findOne({ where: { email: email } });

        if (olderUser) {
            return res.status(409).send('This user is already registered, Please login');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
             name: name,
             email: email.toLowerCase(),
             password: hashedPassword
        })
                
        const token = jwt.sign(
            { user_id: user.id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: '2h'
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

        const user = await User.findOne({ where: { email: email } });
        
      
        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                
                  const token = jwt.sign( { user_id: user.id, email },
                       process.env.TOKEN_KEY,
                      {
                    expiresIn: '2h'
                     });

                        user.token = token;

                        const dataResponse = {
                            id: user.id,
                            name: user.name,
                            token: user.token
                        }

                        return res.status(201).json(dataResponse)
                }
            }

        res.status(400).json('Invalid Credentials')
               
    } catch (error) {
        res.status(500).send(error.message)
    }
}


exports.deleteUser = async(req, res) => {
    const { id } = req.params;
    try {
         await User.destroy({ where: { id: id } });
         res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message)
    }
}
