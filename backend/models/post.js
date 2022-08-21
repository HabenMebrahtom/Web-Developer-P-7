const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Comment = require('./comment');
const UserPost = require('./userPost');


const Post =  sequelize.define('post', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING, allowNull: true },
    userId: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
},
    {
        timestamps: false
    }
);



Post.hasMany(Comment, {
    as: 'comment',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    as: 'post',
    onDelete: 'CASCADE'
});

Post.hasMany(UserPost, {
    as: 'userPost',
    onDelete: 'CASCADE'
});

UserPost.belongsTo(Post, {
    as: 'post',
    onDelete: 'CASCADE'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected Sucessfully')
    }).catch((error) => {
        console.log(error)
    });

module.exports = Post;