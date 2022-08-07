const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Post = require('../models/post');


const User = sequelize.define('user', {
     id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
     name: { type: DataTypes.STRING, allowNull: false },
     email: { type: DataTypes.STRING, unique: true, isLowercase: true, allowNull: false },
     password: { type: DataTypes.STRING, allowNull: false },
     token: { type: DataTypes.STRING }
});

module.exports = User;


sequelize.sync({force: true})

