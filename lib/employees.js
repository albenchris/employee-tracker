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
    db.query(
        // getting necessary employee data
        `SELECT last_name, first_name, title, id FROM employees`,
        function (err, results) {
            if (err) throw err;

            // making it easier to read results
            const employees = results.map(data => {
                let employee = `${data.last_name}, ${data.first_name}, ${data.title}, ${data.id}`;

                return employee;
            });

            // Questions start
            return inquirer.prompt([
                {
                    type: "list",
                    name: "whichEmployee",
                    message: `
                
Which employee would you like to update?`,
                    // using array of employees
                    choices: employees
                },
                {
                    type: "input",
                    name: "newTitle",
                    message: `
                    
Please enter the employee's new role: `,
                    validate: (newRole => (newRole ? true : console.log("This field is required.")))
                }
            ])
            // Questions end
            .then(employee => {
                const employeeData = employee.whichEmployee.split(", ");
                const employeeName = employeeData[1] + employeeData[0];
                const employeeID = parseInt(employeeData[3]);

                const oldRole = employeeData[2];
                const newRole = employee.newTitle;

                // DATABASE UPDATE
                db.query(
                    `UPDATE employees SET title = ? WHERE id = ?`,
                    [employee.newTitle, employeeID],
                    function (err, res) {
                        if (err) throw err;

                        console.log(`
                        
Successfully updated ${employeeName} from ${oldRole} to ${newRole}!

                        Rows affected: ${res.affectedRows}

                        `)

                        return res;
                    }
                );
            });
        }
    );
};

// ===== EMPLOYEES END =================================|


module.exports = { viewEmployees, addEmployee, updateEmployee };