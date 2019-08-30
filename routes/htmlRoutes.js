const db = require("../models");

module.exports = app => {

  // index route loads index.html
  app.get("/", (req, res) => {
    db.Burger.findAll({}).then(dbBurgers => {
      res.render("index", {
        msg1: "Hot 'n ready!",
        msg2: "Devoured!",
        burgers: dbBurgers
      });
    });
  });

  // if no matching route is found default to home
  app.get("*", (req, res) => {
    res.render("404");
  });

};
