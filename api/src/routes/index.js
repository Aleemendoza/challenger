const { Router } = require('express');
const homeRouter = require('./homeRoute')

const router = Router();

router.use('/', homeRouter)



module.exports = router;
