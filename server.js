// DEPENDENCIES
const express = require("express");
const db = require("./db/company.db");

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require("./routes/apiRoutes");

// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// USE apiRoutes
app.use("/api", apiRoutes);

// DEFAULT response for any request not found (catch all)
app.use((req, res) => {
    res.status(404).end();
});

// START server after DB connection
// db.on("open", () => {
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// });
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});