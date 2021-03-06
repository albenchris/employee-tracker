// DEPENDENCIES
const express = require("express");
const db = require("./db/database");

const PORT = process.env.PORT || 3001;
const app = express();

const promptUser = require("./lib/menu");

// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// USE promptUser
// app.use(promptUser);

// DEFAULT response for any request not found (catch all)
app.use((req, res) => {
    res.status(404).end();
});

// START server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});