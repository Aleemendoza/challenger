const { Router } = require('express');
const express = require('express');
const router = Router();

const DBConnection = require('../services/db.js');

const connection = DBConnection();



router.get('/', function (req, res) {
  connection.connect();  
 
  connection.query('SELECT * FROM rutas', function(err, resultados)   
  {  
      connection.end();
 
      if (err) throw err;  
 
      res.json(resultados); 
 
  });
});

router.post('/', function(req, res){

	res.status(201).send('ruta post')

})


module.exports = router;
	