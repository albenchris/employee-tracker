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
    });
};

const addRole = () => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, function(err, res) {
        if (err) throw err;

        return inquirer.prompt([
            {
            type: "input",
            name: "newRole",
            message: `
            
Please enter the title of this role:
    
    `,
            validate: (roleTitle => ( roleTitle ? true : console.log("This field is required.")))
        },
        {
            type: "input",
            name: "salary",
            message: `
            
Please enter the salary for this role:
    
    `
        }])
            .then(answer => {
                db.query(
                    `INSERT INTO roles (title, salary)
                        VALUES (?, ?)`,
                    [answer.newRole, answer.salary],
                    function(err, res) {
                        if (err) throw err;
                        console.log(`
                        
Successfully added new role: 

        ${answer.newRole}

                        `);
                    }
                );
            });
    });
};

// ===== ROLES END =================================|


module.exports = { viewRoles, addRole };