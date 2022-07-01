import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
  email: {type: DataTypes.STRING, allowNull: false},
  password: { type: DataTypes.STRING, allowNull: false },
  token : { type: DataTypes.STRING}
});