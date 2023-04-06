const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
const cors = require("cors");

// parse requests of content-type -application/json

app.use(express.json());
app.use(cors());
//app.get("/", (req, res) => {
//    res.json({ message: "Welcome to my  application." });
//});

let userRoutes = require('./routes/userRoutes')
app.use('./api/users', userRoutes)

// set port, listen for requests
const PORT = process.env.DB_PORT || 1000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});