'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gender extends Model {

    static associate(models) {
      Gender.hasMany(models.Product, {foreignKey: "genderId"})
      Gender.hasMany(models.ProductColor, {foreignKey: "genderId"})
    }
  }
  Gender.init({
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
    modelName: 'Gender',
  });
  return Gender;
};