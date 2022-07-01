const sql = require('mssql');
const getConnection = require('../db.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
require('dotenv').config();



exports.registerUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!(email && password)) {
            res.status(400).send('All input fields required');
        }

        const pool = await getConnection();

        const olderUser = await pool.request().input('email', email).query('SELECT * FROM Users WHERE email = @email');

        if (olderUser) {
            return res.status(409).send('This user is already registered, Please login');
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await pool.request()
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, hashedPassword)
            .query('INSERT INTO [Groupomania].[dbo].[Users] (email, password) VALUES(@email, @password)')
        
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