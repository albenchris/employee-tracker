// Dependencies
const db = require("../db/database");
const inquirer = require("inquirer");
const cTable = require("console.table");
const promptUser = require("./menu");

// ===== EMPLOYEES START ===================================|

const viewEmployees = () => {
    const sql = `SELECT * FROM employees`
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.table(`

EMPLOYEES`,
result
        );
    });
};

// ===== EMPLOYEES END =================================|


module.exports = { viewEmployees };