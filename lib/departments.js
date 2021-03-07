// Dependencies
const db = require("../db/database");
const inquirer = require("inquirer");
const cTable = require("console.table");

// ===== DEPARTMENTS START ==========================|

const viewDepartments = () => {
    console.clear();

    // Table formatting
    const sql = `SELECT id AS ID,
                    department_name AS Department
                    FROM departments`;

    // Table display
    db.query(sql, function (err, res) {
        if (err) throw err;

        console.table(`

LIST OF DEPARTMENTS`, res
        );

        return res;
    });
};

// +   +   +   +   +   +   +   +   +   +   +   +   +   +

const addDepartment = () => {
    console.clear();

    // Question start
    return inquirer.prompt(
        {
            type: "input",
            name: "newDepartment",
            message: `
            
Please enter the department name: `,
            validate: (departmentName => (departmentName ? true : console.log("This field is required.")))
        }
    )
    // Question end
    
        .then(answer => {
            // DATABASE UPDATE
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