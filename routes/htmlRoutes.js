var db = require("../models");

module.exports = function(app) {
  // index page
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      res.render("index", {
        msg: "CRUD-A-BURGER!",
        burger: results
      });
    });
  });

  // burger card and pass in a burger by id
  app.get("/burger/:id", function(req, res) {
    db.Burger.findOne({ where: { id: req.params.id } }).then(function(results) {
      res.render("burger", {
        burger: results
      });
    });
  });

  // render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
