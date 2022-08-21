const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Profile = sequelize.define('profile', {
     id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
     dateOfBirth: { type: DataTypes.DATE, allowNull: true },
     jobTitle: { type: DataTypes.STRING, allowNull: true},
     profileImageUrl: { type: DataTypes.STRING, allowNull: true }
});

module.exports = Profile;