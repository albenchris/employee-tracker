const mySQL = require("mysql2");

// CONNECT to database
const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "#G!tt!nGud@tC0d!ng",
    database: "companyDB"
});

module.exports = db;