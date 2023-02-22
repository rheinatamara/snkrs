'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
    size: { 
      type: DataTypes.ARRAY(DataTypes.STRING),
        required: true,   
    },
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};