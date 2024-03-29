'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Product,{foreignKey: "productId"})
      Image.belongsTo(models.ProductColor,{foreignKey: "productColorId"})
    }
  }
  Image.init({
    productId: DataTypes.INTEGER,
    productColorId: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};