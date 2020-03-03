// dependencies
require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");

// required models for syncing
const db = require("./models");

// sets up express and port
const app = express();
const PORT = process.env.PORT || 3000;

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static directory
app.use(express.static("public"));

// handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
require("./routes")(app);

// for testing, set syncOptions.force to true to clear DB when initializing server
const syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
