// Dependencies
const db = require("../db/database");
const inquirer = require("inquirer");
const cTable = require("console.table");

// ===== ROLES START ===================================|

const viewRoles = () => {
    console.clear();
    const sql = `SELECT * FROM roles`;

    db.query(sql, function (err, result) {
        if (err) throw err;

        console.table(`

ROLES`, result
        );

        return result;
    });
};

// +   +   +   +   +   +   +   +   +   +   +   +   +   +   +

const addRole = () => {
    console.clear();

    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: `
            
Please enter the title of this role: `,
            validate: (roleTitle => (roleTitle ? true : console.log("This field is required.")))
        },
        {
            type: "input",
            name: "salary",
            message: `
            
Please enter the salary for this role: `,
            validate: (salaryInput => (salaryInput ? true : console.log("This field is required.")))
        },
        {
            type: "list",
            name: "department",
            message: `
                
What department is this role in?`,
            choices: [
                "Administration",
                "Sales",
                "Accounting",
                "Customer Service",
                "Quality Assurance",
                "Purchasing",
                "Warehouse",
                "Human Resources"
            ]
        }
    ])
        .then((answers) => {
            db.query(
                `INSERT INTO roles (title, salary, department_name)
                    VALUES (?, ?, ?)`,
                [answers.title, answers.salary, answers.department],
                function (err, res) {
                    if (err) throw err;

                    console.log(`
                        
Successfully added new role: ${answers.title}

                    Rows affected: ${res.affectedRows}

                    `);

                    return res;
                }
            );
        });
};

// ===== ROLES END =================================|


module.exports = { viewRoles, addRole };