var db = require("../models");

module.exports = router => {
  // Home page - rendering all burgers on the menu!
  router.get("/", (req, res) =>
    db.Burger.findAll()
      .then(burgers => {
        res.render("index", {
          burgers
        });
      })
      .catch(err => console.log(err))
  );

  // Burger profile page
  router.get("/burger/:id", (req, res) =>
    db.Burger.findOne({ where: { id: req.params.id } })
      .then(burgers => {
        res.render("burger", {
          burgers
        });
      })
      .catch(err => console.log(err))
  );

  // Render 404 page for any unmatched routes
  router.get("*", (req, res) => res.render("404"));

  // POST route to create a new burger
  router.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // PUT route to "eat" the burger (changing burger object's devoured value from false to true)
  router.put("/api/burgers/:id", (req, res) => {
    db.Burger.update(
      { devoured: true },
      { returning: true, where: { id: req.params.id } }
    ).then(results => {
      return res.json(results);
    });
  });

  // Delete a burger by id
  router.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });
};
