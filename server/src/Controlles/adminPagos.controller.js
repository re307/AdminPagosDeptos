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
    adminPagosController.getInfoPagoDep = async(req,res)=>{

        console.log(req.params);
        const {Id} = req.params;
        const PagoDepto = await PagosModel.find({_id:Id});
        const {departamento} = PagoDepto;
        res.send({message:"Consultando Depto: "+departamento,Info:PagoDepto});

    };


module.exports = adminPagosController;