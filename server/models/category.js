'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product,{foreignKey: "categoryId"})

    }
  }
  Category.init({
    name:  {
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
    modelName: 'Category',
  });
  return Category;
};