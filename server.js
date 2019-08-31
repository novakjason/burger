// dependencies
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

// required models for syncing
var db = require("./models");

// sets up express and port
var app = express();
var PORT = process.env.PORT || 3000;

// express middleware
app.use(express.urlencoded({ extended: false }));
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
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// for test, set syncOptions.force to true to clearing the `testdb`
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
