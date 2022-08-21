const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const UserPost = sequelize.define('userPost', {
        userId: {type: DataTypes.STRING, allowNull: false}
}, {
    timestamps: false
});


module.exports = UserPost;