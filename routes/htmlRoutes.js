
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
var path = require("path");
var db = require("../models");
// Routes
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads .html
  app.get("/", function(req, res) {
    db.Product.findAll({
      limit: 4,
      where: {
       category: 'Smartphones'
      },
      include: [db.User]
    }).then(function(results) {
      res.sendFile(path.join(__dirname, "../public/html/index.html"));
      // res.render('index', { product: results} );
    });
  });

  // search for stores by the store username 
  app.get("/store/:store", function(req, res) {
    console.log(req.isAuthenticated());
    if (req.params.store) {
      db.User.findOne({
        where: {userName: req.params.store},
        include: [
            db.Product
        ]
      }).then(function(results) {
        //  res.render('store', {userInfo: results});
        res.sendFile(path.join(__dirname, "../public/html/user-page.html"));
      });
    }
  });
// loads product page 
app.get("/add-product", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/html/add-product.html"));
});
 
// do the search and pass 
  app.get("/search/:search", function(req, res) {
    if (req.params.search) {
      db.Product.findAll({
        where: {
          $or: [
            { productName: req.params.search }, // AND ( userName=userName )
            { category: req.params.search  }, // AND ( password=password )
           { description: req.params.search }
          ]
        },
        include: [db.User]
      }).then(function(results) {
        res.sendFile(path.join(__dirname, "../public/html/search.html"));
        // res.render("search", { productsSearched: results });
      });
    };
  });

  // search for product with this Id 
  app.get("/product/:id", function(req, res) {
    db.Product.findOne({
      where: {
        Id: req.params.id
      },
      include: [db.User]
    }).then(function(results) {
      // res.render("product-view", { product: results });
      res.sendFile(path.join(__dirname, "../public/html/product-page.html"));
    });
  });

  app.get("/messaging", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/messaging.html"));
  });
  
  app.get("/sign-up", function(req, res) {
    if (req.user) {
      res.redirect("/user-page");
    }
    res.sendFile(path.join(__dirname, "../public/html/sign-up.html"));
  });
  
  app.get("/log-in", function(req, res) {
    if (req.user) {
      res.redirect("/user-page");
    }
    res.sendFile(path.join(__dirname, "../public/html/log-in.html"));
  });
 
   
};