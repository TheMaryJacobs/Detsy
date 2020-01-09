// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// used for parsing form data
var formidable = require("formidable");
// using passport for authentication
var passport = require("../config/passport");

// Requiring our models
var db = require("../models");
var path = require("path");

// Routes
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });
  //
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
  //
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  // get all products

  app.get("/api/products/all", function(req, res) {
    db.Product.findAll({}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  // get products by category
  app.get("/api/category/:category", function(req, res) {
    db.Product.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Add a New Products
  app.post("/addProducts", function(req, res) {
    // Setup formidable
    // Instantiate a new formidable form for processing.
    var form = new formidable.IncomingForm();

    // Parse the form request
    // form.parse analyzes the incoming stream data, picking apart the different fields and files .
    form.parse(req, function(err, fields, files) {
      // Add Product to DB
      db.Product.create({
        UserId: fields.userID,
        productName: fields.productName,
        category: fields.category,
        price: fields.price,
        description: fields.description,
        imageURL: files.imageURL.name
      }).then(function(dbProduct) {
        res.redirect("/product/" + dbProduct.id);
      });
    });
    /* this is where the renaming happens */
    form.on("fileBegin", function(name, file) {
      //rename the incoming file to the file's name
      file.path =
        path.basename(path.dirname("../")) +
        "/public/uploads/products/" +
        file.name;
    });

    form.on("end", function() {
      console.log("File Uploaded succesfully");
    });
  });

  // PUT route for updating products
  app.put("/editProducts/:id", function(req, res) {
    //req.isAuthenticated() will return true if user is logged in
    // to check if a user is authenticated or not we use this method.
    if (req.isAuthenticated()) {
      db.Product.update(
        {
          productName: req.body.edited_product_name,
          price: req.body.edited_price,
          category: req.body.edited_category,
          description: req.body.edited_description
        },
        {
          where: {
            Id: req.params.id
          }
        }
      ).then(function(results) {
        console.log(req.params.id);
        res.redirect("/editProducts/" + req.params.id);
      });
    }
  });
};
