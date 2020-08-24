const DBConnection = require('../services/db.js');
const connection = DBConnection();



function obtener() {


        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM rutas`,
                (err, resultados) => {
                    
                    if (err) reject(err);

                 else resolve(resultados);
             });
        });
    };




function fecha_desde(){

	return new Promise((resolve, reject) => {

		connection.query(`SELECT id, nombre, stock, precio FROM fechas_desde`,
			(err, resultados) => {
				if(err) reject(err);

				else resolve(resultados);
			})
	})
}

module.exports = {

	obtener,
	fecha_desde

}