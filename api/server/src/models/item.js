'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    type: DataTypes.STRING,
    idproduct: DataTypes.DECIMAL,
    idadditional: DataTypes.DECIMAL,
    idorder: DataTypes.DECIMAL
  }, {});
  item.associate = function(models) {
    // associations can be defined here
  };
  return item;
};