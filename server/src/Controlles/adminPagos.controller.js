const adminPagosController ={};

    adminPagosController.getInfoPagos = (req,res)=>{ res.send('Obten Pagos') };
    adminPagosController.inserInfoPagos = (req,res)=>{ res.send('Realiza pago') };

module.exports = adminPagosController;