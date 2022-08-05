const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Comment = require('./comment');


const Post =  sequelize.define('post', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING, allowNull: true },
    userId: {type: DataTypes.STRING, allowNull: false}
},
    {
        timestamps: false
    });



Post.hasMany(Comment, {
    foreignKey: 'id',
    as: 'comment'
});

Comment.belongsTo(Post, {
    foreignKey: 'postId',
    as: 'post'
});


sequelize.authenticate()
    .then(() => {
        console.log('Connected Sucessfully')
    }).catch((error) => {
        console.log(error)
    });

module.exports = Post;