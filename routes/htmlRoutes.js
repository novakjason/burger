const path = require("path");

module.exports = function(app) {

  // index route loads index.html
  app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // if no matching route is found default to home
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
