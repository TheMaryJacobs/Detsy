const path = require("path");
// ROUTES

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
  app.get("/add-product", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/add-product.html"));
  });
  app.get("/messaging", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/messaging.html"));
  });
  app.get("/product-page", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/product-page.html"));
  });
  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/sign-up.html"));
  });
  app.get("/user-page", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/user-page.html"));
  });
};
