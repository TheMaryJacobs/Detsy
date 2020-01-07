module.exports = function(sequelize, DataTypes) {
  const users = sequelize.define("users", {
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING
  });
  return users;
};
