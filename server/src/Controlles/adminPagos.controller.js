const adminPagosController ={};

const PagosModel = require('../Models/pagos');

    adminPagosController.getInfoPagos = async (req,res)=>{
         //res.send('Obten Pagos');
         try {

            const pagos = await PagosModel.find();
            res.json(pagos);
             
         } catch (error) {
             console.error(error);
         }
    };
    adminPagosController.inserInfoPagos = (req,res)=>{ res.send('Realiza pago') };

module.exports = adminPagosController;