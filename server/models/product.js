'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Brand,{foreignKey: "brandId"});
      Product.belongsTo(models.Category,{foreignKey: "categoryId"});
      Product.hasMany(models.Image, {foreignKey: "productId"});
      Product.belongsTo(models.User, { foreignKey: "authorId" });
      Product.hasMany(models.Bag, {foreignKey: "productId"})
      Product.hasOne(models.Size, {foreignKey:"productId"})
      Product.belongsTo(models.Gender, {foreignKey: "genderId"})
      Product.hasMany(models.ProductColor, {foreignKey: "productId"})
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name is required",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Description is required",
        },
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Price is required",
        },
        notNull: true,
      },
    },
    brandId: DataTypes.INTEGER,
    genderId:  DataTypes.INTEGER,
    isFeatured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    mainImg: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Image is required",
        },
        notNull: true,
      },
    },
    authorId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};