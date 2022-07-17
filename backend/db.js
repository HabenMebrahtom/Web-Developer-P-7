const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PWD, 
    {
        host: process.env.DB_SERVER,
        dialect: process.env.DB_DIALECT
    }
)


module.exports = sequelize;