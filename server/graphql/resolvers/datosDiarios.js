const postgresDB = require('../../postgres/postgresDB');

module.exports = {
  Query: {
    async getDataDiaria() {
      try {
        const dataPorDia = await postgresDB.models.DATOS_DIARIOS.findAll();
        return dataPorDia;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
