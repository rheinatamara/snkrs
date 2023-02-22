'use strict';
const {encode} = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
     name: 'John Doe',
     email: 'johndoe@mail.com',
     password: encode('12345'),
     role: 'admin',
     createdAt: new Date(),
    updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
