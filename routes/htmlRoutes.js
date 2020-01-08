const path = require("path");
// ROUTES

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
  app.get("/add-product", function(req, res) {
    res.sendFile(path.join(__dirname, "/add-product.html"));
  });
  app.get("/messaging", function(req, res) {
    res.sendFile(path.join(__dirname, "/messaging.html"));
  });
  app.get("/product-page", function(req, res) {
    res.sendFile(path.join(__dirname, "/product-page.html"));
  });
  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "/sign-up.html"));
  });
  app.get("/user-page", function(req, res) {
    res.sendFile(path.join(__dirname, "/user-page.html"));
  });
};
