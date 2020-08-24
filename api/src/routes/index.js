const { Router } = require('express');
const express = require('express');
const router = Router();
const {obtener} = require('../controllers/index.js')
const {fecha_desde} = require('../controllers/index.js')


router.get('/', function (req, res) {
 
	obtener()
	.then(response => {
		res.send(response)
	})
	.catch(e => {
		return e
	}) 
  });


router.get('/fecha', function(req, res){

	fecha_desde()

	.then( response => {
		res.send(response)
	})
	.catch(err => {
		return err;
	})
	
})





router.post('/', function(req, res){

	res.status(201).send('ruta post')

})


module.exports = router;
	