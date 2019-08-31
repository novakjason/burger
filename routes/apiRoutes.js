var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new example
  app.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Delete an example by id
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });
};
