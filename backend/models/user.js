const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const user = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true, isLowercase: true, allowNull: false},
  password: { type: DataTypes.STRING, allowNull: false },
  token : { type: DataTypes.STRING}
});


module.exports = user;