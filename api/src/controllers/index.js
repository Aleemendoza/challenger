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




function fechaDesde(){

	return new Promise((resolve, reject) => {

		connection.query(`SELECT fecha_desde FROM rutas`,
			(err, resultados) => {
				if(err) reject(err);

				else resolve(resultados);
			})
	})
}

module.exports = {

	obtener,
	fechaDesde

}