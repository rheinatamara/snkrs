'use strict';
const genders = require('../../database/gender.json');
genders.forEach(gender => {
  delete gender.id;
  gender.createdAt = new Date()
  gender.updatedAt = new Date()
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Genders',genders, {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genders', null, {});

  }
};
