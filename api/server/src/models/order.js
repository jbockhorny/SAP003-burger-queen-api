'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.STRING,
    client_name: DataTypes.STRING,
    is_table: DataTypes.DECIMAL

  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.item)
  };
  return Order;
};