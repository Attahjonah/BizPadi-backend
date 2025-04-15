'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
   await queryInterface.createTable('products', {
   product_id: {
       type: DataTypes.STRING,
       primaryKey: true,
     //  allowNull: false,
     },
     name: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     description: {
       type: DataTypes.TEXT,
     },
     price: {
       type: DataTypes.FLOAT,
       allowNull: false,
     },
     quantity: {
       type: DataTypes.INTEGER,
       allowNull: false,
     },
     image_url: {
       type: DataTypes.STRING,
       allowNull: true,
     },
     category: {
       type: DataTypes.STRING,
       allowNull: true,
     },
     created_at: {
       type: DataTypes.DATE,
       defaultValue: DataTypes.NOW,
     },
     updated_at: {
       type: DataTypes.DATE,
       defaultValue: DataTypes.NOW,
     },
      }
   )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products')
  }
};

