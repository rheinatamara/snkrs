'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImageDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ImageDetail.belongsTo(models.Product,{foreignKey: "productId"})
      ImageDetail.belongsTo(models.ProductColor,{foreignKey: "productColorId"})
    }
  }
  ImageDetail.init({
    productId: DataTypes.INTEGER,
    productColorId: DataTypes.INTEGER,
    imgDetails: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ImageDetail',
  });
  return ImageDetail;
};