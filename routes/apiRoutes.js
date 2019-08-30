const db = require("../models");

module.exports = function (app) {

  // gets all burgers
  app.get("/api/burgers", function (req, res) {

    db.Burger.findAll({
      where: query
    }).then(function (dbBurgers) {
      res.json(dbBurgers);
    });

  });

  // create a new burger
  app.post("/api/burgers", (req, res) => {
    db.Burger.create(req.body).then(dbBurgers => {
      res.json(dbBurgers);
    });
  });

};