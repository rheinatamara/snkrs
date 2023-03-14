'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductColors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      color: {
        required: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      hexCode: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      name: {
        required: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        equired: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description: {
        required: true,
        allowNull: false,
        type: Sequelize.TEXT
      },
      brandId: {
        required: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Brands",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      genderId: {
        required: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Genders",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      isFeatured: {
        type: Sequelize.BOOLEAN
      },
      categoryId: {
        required: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      mainImg: {
        required: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      authorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Colors');
  }
};