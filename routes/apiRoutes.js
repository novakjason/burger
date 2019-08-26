const db = require("../models");

module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {

    db.Burger.findAll({
        where: query
      }).then(function(dbBurger) {
        res.json(dbBurger);
      });

});

};