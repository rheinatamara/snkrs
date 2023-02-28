'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Brand,{foreignKey: "brandId"});
      Product.belongsTo(models.Brand,{foreignKey: "categoryId"});
      Product.hasMany(models.Image, {foreignKey: "productId"});
      Product.belongsTo(models.User, { foreignKey: "authorId" });
      Product.hasMany(models.Bag, {foreignKey: "productId"})

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
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Gender is required",
        },
        notNull: true,
      },
    },
    sizeAvailable:{ 
      type: DataTypes.ARRAY(DataTypes.STRING),
        required: true,
    
    
    },
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