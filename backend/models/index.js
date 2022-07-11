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
db.topic = require('./topic')(sequelize, DataTypes);
db.reply = require('./reply')(sequelize, DataTypes);
db.sequelize.sync({ force: false });

db.user.hasMany(db.topic, {
    foreignKey: 'userId',
    as: 'topic'
})

db.topic.belongsTo(db.user, {
    foreignKey: 'userId',
    as:'topic' 
})

db.user.hasMany(db.reply, {
    foreignKey: 'userId',
    as: 'reply'
})

db.reply.belongsTo(db.user, {
    foreignKey: 'userId',
    as:'reply' 
})

module.exports = db;