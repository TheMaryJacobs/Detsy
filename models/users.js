module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("users", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};
