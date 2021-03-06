// const db = require("../db/database");
const inquirer = require("inquirer");
const db = require("../db/database");
const { viewDepartments } = require("./departments");
const { viewRoles } = require("./roles");

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
                console.log("Viewing Departments");
                viewDepartments();
                return promptUser();
            }
            case "View Roles": {
                console.log("Viewing Roles");
                viewRoles();
                return promptUser();
            }
            case "View Employees": {
                console.log("Viewing Employees");
                return promptUser();
            }
            case "Add Department": {
                console.log("Adding Department");
                return promptUser();
            }
            case "Add Role": {
                console.log("Adding Role");
                return promptUser();
            }
            case "Add Employee": {
                console.log("Adding Employee");
                return promptUser();
            }
            case "Update Employee": {
                console.log("Updating Employee");
                return promptUser();
            }
            case "Exit": {
                db.end();
                break;
            }
        }
    });
};

module.exports = promptUser;