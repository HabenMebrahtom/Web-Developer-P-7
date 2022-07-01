const sql = require('mssql')

const sqlConfig = {
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
    trustServerCertificate: true// change to true for local dev / self-signed certs
    },
   port: 1433
}

//ip adress =  192.168.0.102

sql.on('error', error => {
    console.log(error.message);
})

async function getConnection() {
    try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request().query(`SELECT * FROM Users`);
        console.log(result)
        sql.close();
    } catch (error) {
        console.log(error);
         sql.close();
    }
}

getConnection();
