

require('dotenv').config();
var mysql = require('mysql');

// const {
//   DB_USER, DB_PASSWORD, DB_HOST,
// } = process.env;


function db() {
  

return conexion = mysql.createConnection({
  host: '35.247.240.150',
  user: 'henry',
  password: 'examenhenry123',
  database : 'ema_base_municipalidad_pilar'
});
  let client;
  const conn = conexion.connect()
    .then((c) => {
      client = c;
    });
}

module.exports = db;

