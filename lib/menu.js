// Dependencies
const db = require("../db/database");
const inquirer = require("inquirer");
const { viewDepartments, addDepartment } = require("./departments");
const { viewRoles, addRole } = require("./roles");
const { viewEmployees } = require("./employees");

// ================= MENU START ===========================|

const promptUser = () => {
    return inquirer.prompt({
        type: "list",
        name: "menu",
        message: "What would you like to do?",
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
    .then((options) => {
        switch (options.menu) {
            case "View Departments": {
                viewDepartments();
                return promptUser();
            }
            case "View Roles": {
                viewRoles();
                return promptUser();
            }
            case "View Employees": {
                viewEmployees();
                return promptUser();
            }
            case "Add Department": {
                addDepartment();
                return promptUser();
            }
            case "Add Role": {
                addRole();
                return promptUser();
            }
            case "Add Employee": {
                return promptUser();
            }
            case "Update Employee": {
                return promptUser();
            }
            case "Exit": {
                db.end();
                break;
            }
        }
    });
};

// ================== MENU END =======================|

module.exports = promptUser;