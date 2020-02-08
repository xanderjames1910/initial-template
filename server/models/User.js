const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  nombre: String,
  cedula: String,
  telefono: String,
  username: String,
  password: String,
  email: String,
  perfil: String,
  direccion: String,
  createdAt: String,
});

module.exports = model('User', userSchema);
