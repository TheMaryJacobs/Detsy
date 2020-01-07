const Product = require("../models");

module.exports = function(app) {
    
    // Sequelize code to get all products
    app.get("/api/all", function(req, res) {
        Product.findAll({}).then(function(results)) {
            res.json(results);
        }
    });

    // Sequelize code to get one specific product
    app.get("/api/:product", function(req, res) {
        try{
            const data = await Product.findByPk(req.params.product)
            res.json(data)
        } catch(err) {
            throw Error(err);
        }
    });

    //Sequelize code to add a new product
    app.post("/api/new", function(req, res) {
        Product.create({
            user_name: req.body.user_name,
            product_name: req.body.product_name,
            product_info: req.body.product_info,
            price: req.body.price,
            image_url: req.body.image_url
        }).then(function(results) {
            res.end();
        });
    });
}