require('dotenv').config();
const express = require("express");
const db = require("./models");


const PORT = process.env.PORT || 3000;
const app = express();

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Listening!  Access http://localhost:3000");
    });
});