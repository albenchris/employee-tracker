const express = require("express");
const router = express.Router();
const db = require("../../db/database");
const inquirer = require("inquirer");

const options = () => {
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
    .then((answer) => {
        switch (answer.choice) {
            case "View Departments": {
                console.log("Viewing Departments");
                return options();
            }
            case "View Roles": {
                console.log("Viewing Roles");
                return options();
            }
            case "View Employees": {
                console.log("Viewing Employees");
                return options();
            }
            case "Add Department": {
                console.log("Adding Department");
                return options();
            }
            case "Add Role": {
                console.log("Adding Role");
                return options();
            }
            case "Add Employee": {
                console.log("Adding Employee");
                return options();
            }
            case "Update Employee": {
                console.log("Updating Employee");
                return options();
            }
            case "Exit": {
                break;
            }
        }
    });
};

options()
    .catch(err => console.log(err));

// router.use(require("./departments"));

// module.exports = router;