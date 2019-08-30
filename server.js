// dependencies
require('dotenv').config();
const express = require("express");
const exphbs = require("express-handlebars");

// sets up express and port
const app = express();
const PORT = process.env.PORT || 3000;

// required models for syncing
const db = require("./models");

// express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static("public"));

// handlebars engine
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");

// routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// syncing sequelize models and then starting express app
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log("Listening!  Access http://localhost:3000");
    });
});

module.exports = app;