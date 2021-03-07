// Dependencies
const db = require("../db/database");
const inquirer = require("inquirer");
const { viewDepartments, addDepartment } = require("./departments");
const { viewRoles, addRole } = require("./roles");
const { viewEmployees, addEmployee, updateEmployee } = require("./employees");

// ================= MENU START ===========================|

const promptUser = () => {
    console.clear();
    console.log(`
    
    Welcome to the company database
    
    `);    

    // Main Menu start
    return inquirer.prompt({
        type: "list",
        name: "menu",
        message: "What are you here for?",
        choices: [
            "View Departments",
            "View Roles",
            "View Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee",
            "Exit"
        ]
    })
    // Main Menu end

    .then((options) => {
        switch (options.menu) {
            case "View Departments": {
                viewDepartments();
                break;
            }
            case "View Roles": {
                viewRoles();
                break;
            }
            case "View Employees": {
                viewEmployees();
                break;
            }
            case "Add Department": {
                addDepartment();
                break;
            }
            case "Add Role": {
                addRole();
                break;
            }
            case "Add Employee": {
                addEmployee();
                break;
            }
            case "Update Employee": {
                updateEmployee();
                break;
            }
            case "Exit": {
                console.log("Goodbye.");
                db.end();
                break;
            }
        }
    })
        .then(promptUser)
        .catch(err => {
            console.log(err)
            throw err;
        })
};

// ================== MENU END =======================|

module.exports = promptUser;