const path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

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
    if (req.user) {
      res.redirect("/user-page");
    }
    res.sendFile(path.join(__dirname, "../public/html/sign-up.html"));
  });
  app.get("/user-page", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/user-page.html"));
  });
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/search.html"));
  });
  app.get("/log-in", function(req, res) {
    if (req.user) {
      res.redirect("/user-page");
    }
    res.sendFile(path.join(__dirname, "../public/html/log-in.html"));
  });
  // app.get("/sign-up", function(req, res) {
  //   // If the user already has an account send them to the members page

  //   res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  // });
  //
  // app.get("/login", function(req, res) {
  //   // If the user already has an account send them to the members page

  //   res.sendFile(path.join(__dirname, "../public/log-in.html"));
  // });
  //
  // // Here we've add our isAuthenticated middleware to this route.
  // // If a user who is not logged in tries to access this route they will be
  // //redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });
};
