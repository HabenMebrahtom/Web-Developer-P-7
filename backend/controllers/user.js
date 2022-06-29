const sql = require('mssql');
const { dbconfig } = require('../dbconfig');


exports.registerUser = (req, res) => {
    const dbConn = new sql.Connection(dbconfig);
    dbConn.connect()
        .then(() => {
            const transaction = new sql.Transaction(dbConn);
            transaction.begin().then(() => {

            })
        })
}