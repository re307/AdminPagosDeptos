const {Router} = require('express');
const router = Router();

const adminPagosController = require('../Controlles/adminPagos.controller');

router.get('/',adminPagosController.getInfoPagos);
router.post('/',adminPagosController.insertInfoPagos);
router.get('/:Id',adminPagosController.getInfoPagoDep);
router.put('/:Id',adminPagosController.updatePagoRealizado);



module.exports = router;