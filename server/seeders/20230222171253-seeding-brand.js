'use strict';
const brands = require('../../database/brand.json');
brands.forEach(brand => {
  delete brand.id;
  brand.createdAt = new Date()
  brand.updatedAt = new Date()
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Brands',brands, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Brands', null, {});
  }
};
