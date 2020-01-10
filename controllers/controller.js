var path = require("path");
var exports = module.exports = {}

exports.signup = function(req, res) {
res.sendFile(path.join(__dirname, "../public/sign-up.html"));

}

exports.signin = function(req, res) {
    res.sendFile(path.join(__dirname, "../public/log-in.html"));   
}


exports.logout = function(req, res) {
       req.session.destroy(function(err) {
           res.redirect('/');
       });
}