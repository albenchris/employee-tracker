// Dependencies
const express = require("express");
const router = express.Router();
const db = require("../../db/database");

// ===== DEPARTMENTS START ==========================|
router.get("/departments", (req, res) => {
    const sql = `SELECT * FROM departments`;
    const params = [];

    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json({
            message: "success",
            data: rows
        });
    });
});

// ===== DEPARTMENTS END =================================|


module.exports = router;