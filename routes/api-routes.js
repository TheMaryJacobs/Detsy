// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// used for parsing form data
var formidable = require("formidable");

// Requiring our models
var db = require("../models");
var path = require("path");

// Routes
module.exports = function(app) {
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
