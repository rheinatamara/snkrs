'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.Product,{foreignKey: "brandId"})
      Brand.hasMany(models.ProductColor,{foreignKey: "brandId"})
    }
  }
  Brand.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name is required",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};