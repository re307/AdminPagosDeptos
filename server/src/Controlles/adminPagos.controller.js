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
    adminPagosController.insertInfoPagos = async (req,res)=>{
        const newPago = new PagosModel(req.body);
        await newPago.save();
        res.send({message:"Nuevo Pago generado"});

    };

module.exports = adminPagosController;