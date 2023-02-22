'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {

    static associate(models) {
      // define association here
      Brand.hasMany(models.Product,{foreignKey: "brandId"})
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