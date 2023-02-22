'use strict';
const sizes = require('../../database/size.json');
sizes.forEach(size => {
  delete size.id;
  size.createdAt = new Date()
  size.updatedAt = new Date()
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sizes',sizes, {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Sizes', null, {});
  }
};
