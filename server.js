require("dotenv").config();
var express = require("express");
// var bodyParser = require("body-parser");
var session = require("express-session");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false })); //For body parser
// app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
const API = require("./routes/apiRoutes");
API.api(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//we are doing a GET to test if our server is working fine
// app.get("/", function(req, res) {
//   res.send("Welcome to Passport with Sequelize and without HandleBars");
// });
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
