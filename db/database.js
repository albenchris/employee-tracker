const mySQL = require("mysql2");
const company = require("./company.db");

// CONNECT to database
const connection = mySQL.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "#G!tt!nGud@tC0d!ng",
    database: "company"
});

connection.connect(err => {
    if (err) {
        console.log(`Error: ${err.message}`);
        return;
    }
    console.log(`Connacted as ID ${connection.threadId}`);
});

module.exports = connection;