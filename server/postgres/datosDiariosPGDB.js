const Sequelize = require('sequelize');

const datosDiariosPGDB = {
  COMPLETAMIENTO: {
    type: Sequelize.STRING(32),
    allowNull: false,
  },
  FECHA: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  PD_HRS_PROD: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  PD_PETROLEO: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  PD_GAS: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  PD_AGUA: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
};

module.exports = datosDiariosPGDB;
