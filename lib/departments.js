// Dependencies
const db = require("../db/database");
const inquirer = require("inquirer");
const cTable = require("console.table");

// ===== DEPARTMENTS START ==========================|

const viewDepartments = () => {
    console.clear();
    const sql = `SELECT * FROM departments`;

    db.query(sql, function (err, result) {
        if (err) throw err;

        console.table(`

DEPARTMENTS`,
            result
        );

        return result;
    });
};

// +   +   +   +   +   +   +   +   +   +   +   +   +   +

const addDepartment = () => {
    console.clear();

    return inquirer.prompt(
        {
            type: "input",
            name: "newDepartment",
            message: `
            
Please enter the department name: `,
            validate: (departmentName => (departmentName ? true : console.log("This field is required.")))
        }
    )
        .then(answer => {
            db.query(
                `INSERT INTO departments (department_name)
                    VALUES (?)`,
                [answer.newDepartment],
                function (err, res) {
                    if (err) throw err;

                    console.log(`
                    
Successfully added new department: ${answer.newDepartment}
                    
                    Rows affected: ${res.affectedRows}
                    
                    `);
                    
                    return res;
                }
            );
        });
};

// ===== DEPARTMENTS END =================================|


module.exports = { viewDepartments, addDepartment };