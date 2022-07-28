const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');


const Post =  sequelize.define('post', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING, allowNull: true}
}, {
    timestamps: false,
});


sequelize.authenticate()
    .then(() => {
        console.log('Connected Sucessfully')
    }).catch((error) => {
        console.log(error)
    });

module.exports = Post;