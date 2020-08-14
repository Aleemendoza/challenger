const { Router } = require('express');
const homeRouter = require('./homeRoute')
const express = require('express');

const router = Router();	


router.get('/', async (req, res) =>{
  res.status(200).send('funciona')
});

module.exports = router;
	