'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductColor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductColor.belongsTo(models.Product, {foreignKey: "productId"})
      ProductColor.belongsTo(models.Brand,{foreignKey: "brandId"});
      ProductColor.belongsTo(models.Category,{foreignKey: "categoryId"});
      ProductColor.hasMany(models.Image, {foreignKey: "productColorId"});
      ProductColor.belongsTo(models.User, { foreignKey: "authorId" });
      ProductColor.hasMany(models.Bag, {foreignKey: "productColorId"})
      ProductColor.hasMany(models.Size, {foreignKey:"productColorId"})
      ProductColor.belongsTo(models.Gender, {foreignKey: "genderId"})
      ProductColor.hasMany(models.ImageDetail, {foreignKey: "productColorId"});

    }
  }
  ProductColor.init({
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Color is required",
        },
      },
    },
    productCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Code is required",
        },
      },
    },
    hexCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "hexCode is required",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name is required",
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Description is required",
        },
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
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductColor',
  });
  return ProductColor;
};