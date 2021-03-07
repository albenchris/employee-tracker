// Dependencies
const db = require("../db/database");
const inquirer = require("inquirer");
const cTable = require("console.table");

// ===== EMPLOYEES START ===================================|

const viewEmployees = () => {
    const sql = `SELECT * FROM employees`
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.table(`

EMPLOYEES`,
            result
        );
    });
};

// +   +   +   +   +   +   +   +   +   +   +   +   +   +

const addEmployee = () => {
    console.clear();

    return inquirer.prompt([
        {
            type: "input",
            name: "lastName",
            message: `
            
Please enter the employee's last name: `,
            validate: (lastName => (lastName ? true : console.log("This field is required.")))
        },
        {
            type: "input",
            name: "firstName",
            message: `
            
Please enter the employee's first name: `,
            validate: (firstName => (firstName ? true : console.log("This field is required.")))
        },
        {
            type: "input",
            name: "role",
            message: `
            
Please enter this employee's role: `,
            validate: (title => (title ? true : console.log("This field is required.")))

        },
        {
            type: "list",
            name: "manager",
            message: `
                
Who is this employee's direct supervisor?`,
            choices: [
                "Regional Manager",
                "Warehouse Manager",
                "Head Accountant"
            ]
        }
    ])
        .then(answers => {
            db.query(
                `INSERT INTO employees (last_name, first_name, title, manager_title)
                        VALUES (?, ?, ?, ?)`,
                [answers.lastName, answers.firstName, answers.role, answers.manager],
                function (err, res) {
                    if (err) throw err;

                    console.log(`
                        
Successfully added new employee: ${answers.lastName}, ${answers.firstName}

                    Rows affected: ${res.affectedRows}

                    `);

                    return res;
                }
            );
        });
};

// +   +   +   +   +   +   +   +   +   +   +   +   +   +

const updateEmployee = () => {
    console.clear();
    console.log("Employee updated!")
}

// ===== EMPLOYEES END =================================|


module.exports = { viewEmployees, addEmployee, updateEmployee };