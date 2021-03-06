// Dependencies
const db = require("../db/database");
const inquirer = require("inquirer");
const cTable = require("console.table");
const promptUser = require("./menu");

// ===== DEPARTMENTS START ==========================|

const viewDepartments = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.table(`

DEPARTMENTS`,
            result
        );
    });
};

const addDepartment = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, function(err, res) {
        if (err) throw err;

        return inquirer.prompt({
            type: "input",
            name: "newDepartment",
            message: `
            
Please enter the department name:

    `,
            validate: (departmentName => ( departmentName ? true : console.log("This field is required.")))
        })
        .then(answer => {
            db.query(
                `INSERT INTO departments (department_name)
                    VALUES (?)`,
                [answer.newDepartment],
                function(err, res) {
                    if (err) throw err;
                    console.log(`
                        
Successfully added new department:

        ${answer.newDepartment}

                    `);
                }
            );
        });
    });
};

// ===== DEPARTMENTS END =================================|


module.exports = { viewDepartments, addDepartment };