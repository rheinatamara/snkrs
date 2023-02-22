'use strict';
const {
  Model
} = require('sequelize');
const { encode } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product,{foreignKey: "authorId"});
      User.hasMany(models.Bag,{foreignKey: "userId"});
    }
  }
  User.init({
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email is already exists",
      },
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid email format",
        },
        notEmpty: {
          args: true,
          msg: "Email is required",
        },
        notNull: true,
      },
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password is required",
        },
        notNull: true,
        isValidPass: function (password) {
          if (password === null || password.length < 5) {
            throw new Error(
              "password cannot be empty and it needs to be longer than 5"
            );
          }
        },
      },
    },
    name: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, option) => {
        user.password = encode(user.password);
      },
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};