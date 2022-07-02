const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../db');


const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.server,
        dialect: dbConfig.dialect
    });


sequelize.authenticate().then(() => {
    console.log('Connected Sucessfully')
}).catch((error) => {
    console.log(error)
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.user = require('./user')(sequelize, DataTypes);

db.sequelize.sync({ force: true });


module.exports = db;