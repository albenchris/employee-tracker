// Dependencies
const db = require("../db/database");
const inquirer = require("inquirer");
const { viewDepartments, addDepartment } = require("./departments");
const { viewRoles, addRole } = require("./roles");
const { viewEmployees, addEmployee } = require("./employees");

// ================= MENU START ===========================|

const promptUser = () => {
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
    .then((options) => {
        switch (options.menu) {
            case "View Departments": {
                return viewDepartments();
            }
            case "View Roles": {
                return viewRoles();
            }
            case "View Employees": {
                return viewEmployees();
            }
            case "Add Department": {
                return addDepartment();
            }
            case "Add Role": {
                return addRole();
            }
            case "Add Employee": {
                return addEmployee();
            }
            case "Update Employee": {
                console.log("Updating employee...")
            }
            case "Exit": {
                db.end();
                break;
            }
        }
    })
    .then((result)=> {
        console.clear();
        return promptUser();
    }).catch(err=> {
        console.log(err)
        throw err;
    })
};

// ================== MENU END =======================|

module.exports = promptUser;