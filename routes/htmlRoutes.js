const path = require("path");
// ROUTES

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/add-product", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add-product.html"));
  });
  app.get("/messaging", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/messaging.html"));
  });
  app.get("/product-page", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/product-page.html"));
  });
  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  });
  app.get("/user-page", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user-page.html"));
  });
};
