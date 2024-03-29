const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Comment = sequelize.define('comment', {
        id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
        comment: { type: DataTypes.STRING, allowNull: false },
        username: {type: DataTypes.STRING, allowNull: false}
}, {
      timestamps: false
});


module.exports = Comment;
