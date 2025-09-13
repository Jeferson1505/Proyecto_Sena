'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cortes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      id_lamina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'laminas', // Debe ser exactamente igual al nombre de tabla
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      ancho_cortado: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      largo_cortado: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      id_maquina: {
        type: Sequelize.INTEGER,
        allowNull: true, // Importante para SET NULL
        references: {
          model: 'maquinas', // Nombre exacto de la tabla
          key: 'id_maquina'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      usuario: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      engine: 'InnoDB'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cortes');
  }
};

