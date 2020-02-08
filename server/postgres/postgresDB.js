const Sequelize = require('sequelize');
const datosDiariosPGDB = require('./datosDiariosPGDB');

const POSTGRESDB = new Sequelize('proyectoPetrolero', 'postgres', 'E-RpQ2we', {
  dialect: 'postgres',
  host: '34.67.217.106',
  port: '5432',
});

const DatosDiarios = POSTGRESDB.define('DATOS_DIARIOS', datosDiariosPGDB);

POSTGRESDB.sync().then(() => {
  // return BaseMaestra.create({
  //   COMPLETAMIENTO: 'CYB-003TS',
  //   FECHA: '2010-06-10',
  //   PD_HRS_PROD: 24,
  //   PD_PETROLEO: 371.895,
  //   PD_GAS: 44,
  //   PD_AGUA: 1160.95,
  // });
  return DatosDiarios;
});

module.exports = POSTGRESDB;
