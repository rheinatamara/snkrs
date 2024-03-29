'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        required: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      color: {
        required: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      productCode: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      hexCode: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },  
      description: {
        required: true,
        allowNull: false,
        type: Sequelize.TEXT
      },
      price: {
        required: true,
        allowNull: false,
        type: Sequelize.INTEGER
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
      isFeatured: {
        required: true,
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      mainImg: {
        required: true,
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Products');
  }
};