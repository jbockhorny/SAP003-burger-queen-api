'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    type: DataTypes.STRING,
    idProduct: DataTypes.INTEGER,
    idProductExtra: DataTypes.INTEGER,
    counter: DataTypes.INTEGER,
    option: DataTypes.STRING,
    idOrder: DataTypes.INTEGER
  }, {});
  item.associate = function(models) {
   
  };
  return item;
};