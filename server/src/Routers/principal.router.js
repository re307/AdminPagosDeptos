const {Router} = require('express');
const router = Router();

const adminPagosController = require('../Controlles/adminPagos.controller');

router.get('/',adminPagosController.getInfoPagos);
router.post('/',adminPagosController.inserInfoPagos);



module.exports = router;