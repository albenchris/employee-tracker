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

    promptUser()
        .catch(err => console.log(err));
});

// ===============================================================

