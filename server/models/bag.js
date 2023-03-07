'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bag extends Model {
    static associate(models) {
      Bag.belongsTo(models.User, {foreignKey: "userId"});
      Bag.belongsTo(models.Product,{foreignKey: "productId"})
    }
  }
  Bag.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bag',
  });
  return Bag;
};