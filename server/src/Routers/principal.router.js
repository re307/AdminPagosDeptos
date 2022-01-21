const {Router} = require('express');
const router = Router();

const adminPagosController = require('../Controlles/adminPagos.controller');

router.get('/hola',adminPagosController);



module.exports = router;