const sql = require('mssql')

const dbSettings = {
    user: 'sa',
    password: 'Haben1985',
    server: 'LAPTOP-083NV1OH',
    database: 'Groupomania',
    port: 1433
}

//ip adress =  192.168.0.102

async function getConnection() {
    const pool = await sql.connect(dbSettings);
    pool.request
}
