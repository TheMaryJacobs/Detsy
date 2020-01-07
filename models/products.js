module.exports = function(sequelize, DataTypes) {
  const products = sequelize.define("products", {
    user_name: DataTypes.STRING,
    product_name: DataTypes.STRING,
    product_info: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    image_url: DataTypes.STRING
  });
  return products;
};
