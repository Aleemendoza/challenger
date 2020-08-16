obtener() {
        return new Promise((resolve, reject) => {
            conexion.query(`select fecha_desde from rutas`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                });
        });
    };
