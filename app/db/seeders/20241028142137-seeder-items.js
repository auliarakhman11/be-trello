'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Items', [
          {
            name: 'Do Someting',
            TodoId: 1,
            createdAt : new Date,
            updatedAt : new Date,
          },
          {
            name: 'Do Someting Else',
            TodoId: 2,
            createdAt : new Date,
            updatedAt : new Date,
          },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Items', null, {});

  }
};
