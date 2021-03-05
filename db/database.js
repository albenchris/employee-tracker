const mySQL = require("mysql2");

// CONNECT to database
const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "#G!tt!nGud@tC0d!ng",
    database: "companyDB"
});

db.connect(err => {
    if (err) {
        console.log(`Error: ${err.message}`);
        return;
    }
    console.log(`Connacted as ID ${connection.threadId}`);
});

module.exports = db;