// Dependencies
const db = require("../db/database");
const inquirer = require("inquirer");
const cTable = require("console.table");

// ===== ROLES START ===================================|

const viewRoles = () => {
    const sql = `SELECT * FROM roles`
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.table(`

ROLES`,
result
        );
    })
};

// ===== ROLES END =================================|


module.exports = { viewRoles };