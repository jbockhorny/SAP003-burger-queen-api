'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.STRING,
    is_table: DataTypes.DECIMAL
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};