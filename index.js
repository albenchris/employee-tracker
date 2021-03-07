// DEPENDENCIES
const db = require("./db/database");
const promptUser = require("./lib/menu");

// ============== MAIN FUNCTIONALITY ============================

// CONNECT to database
db.connect(err => {
    if (err) {
        console.log(`Error: ${err.message}`);
        return;
    }
    console.log(`Connected to the company database`);
    promptUser()
        .catch(err => console.log(err));
});

// ===============================================================

