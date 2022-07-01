const sql = require('mssql');
const { Sequelize } = require('sequelize');


const dbConfig = {
    user: 'sa',
    password: 'Haben1985',
    server: 'localhost',
    database: 'Groupomania',
    dialect: 'mssql',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true// 
    },
   port: 1433
}



const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, { host: dbConfig.server, dialect: dbConfig.dialect });
module.exports = sequelize;

//ip adress =  192.168.0.102


/*exports.getConnection = async() => {
    try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request().query(`SELECT * FROM Users`);
        //console.log(result.recordset)
        sql.close();
    } catch (error) {
        console.log(error);
         sql.close();
    }
}*/

