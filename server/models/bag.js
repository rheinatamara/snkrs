'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bag extends Model {
    static associate(models) {
      Bag.belongsTo(models.User, {foreignKey: "userId"});
      Bag.belongsTo(models.Product,{foreignKey: "productId"})
      Bag.belongsTo(models.ProductColor,{foreignKey: "productColorId"})
    }
  }
  Bag.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    productColorId:DataTypes.INTEGER,
    quantity:DataTypes.INTEGER,
    size:DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Bag',
  });
  return Bag;
};