// Dependencies
// const inquirer = require("inquirer");
// const express = require("express");
// const router = express.Router();
const db = require("../db/database");
const cTable = require("console.table");

// ===== DEPARTMENTS START ==========================|

const viewDepartments = () => {
    const sql = `SELECT * FROM departments`
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.table(`

DEPARTMENTS`, result
        );
    })
};

// ===== DEPARTMENTS END =================================|


module.exports = { viewDepartments };