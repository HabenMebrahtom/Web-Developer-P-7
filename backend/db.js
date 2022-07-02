//const sql = require('mssql');
const { Sequelize } = require('sequelize');


const dbConfig = {
    user: 'sa',
    password: 'Haben1985',
    server: 'localhost',
    database: 'Groupomania',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
  },
  /*options: {
    encrypt: true, // for azure
    trustServerCertificate: true// 
    },
   port: 1433*/
}




module.exports = dbConfig;

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

