'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    type: DataTypes.STRING,
    breakfast: DataTypes.BOOLEAN
  }, {});
  Product.associate = function(models) {
    Product.hasMany(models.item)
  };
  return Product;
};