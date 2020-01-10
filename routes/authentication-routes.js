var authController = require('../controllers/controller.js');
var db = require("../models");
var passport = require('passport');

module.exports = function(app, passport) {
   app.get('/sign-up', authController.signup);
   app.get('/sign-in', authController.signin);
   app.get('/logout', authController.logout);
  //  det's work
  //  app.post("/api/signup", function(req, res) {
  //   console.log(req.body);
  //   db.User.create(req.body)
  //     .then(function() {
  //       res.redirect(307, "/api/login");
  //     })
  //     .catch(function(err) {
  //       console.log(err);
  //       res.json(err);
  //       // res.status(422).json(err.errors[0].message);
  //     });
  // });
   app.post('/sign-up', passport.authenticate('local-signup', {
        successRedirect: '/edit-profile',
        failureRedirect: '/sign-in',
        failureFlash:true
    }));
// det's work
    // app.post("/api/login", passport.authenticate("local"), function(req, res) {
    //   // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    //   // So we're sending the user back the route to the members page because the redirect will happen on the front end
    //   // They won't get this or even be able to access this page if they aren't authed
    //   res.json("/user-page");
    // });
    app.post('/sign-in', passport.authenticate('local-signin', {
        successRedirect: '/edit-profile',
        failureRedirect: '/sign-in',
        failureFlash:true // allow flash messages
    }));

    // Route to edit products
    app.get('/editProducts/:id', isLoggedIn, function (req, res) {
      db.Product.findOne({
        where: {
          Id: req.params.id
        },
        include: [db.User]
      }).then(function(results) {
        res.redirect("/product-page");

      });
    });

    function isLoggedIn(req, res, next) {
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
        
            return next();
 // if they aren't redirect them to the home page
        res.redirect('/sign-in');
        
    }

// det  // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });
// };
}