'use strict';
const categories = require('../../database/brand.json');
categories.forEach(category => {
  delete category.id;
  category.createdAt = new Date()
  category.updatedAt = new Date()
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Categories',categories, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});

  }
};
