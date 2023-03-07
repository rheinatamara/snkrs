'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    static associate(models) {
      Size.belongsTo(models.Size, {foreignKey:"productId"})

    }
  }
  Size.init({
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Type is required",
        },
      },
    },
    sizeAvailable: { 
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      required: true,   
    },
    productId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};