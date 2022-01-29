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
        const {departamento} = PagoDepto[0];
        res.send({message:"Consultando Depto: "+departamento,Info:PagoDepto[0]});

    };

    adminPagosController.updatePagoRealizado = async(req,res)=>{

        console.log(req.params);
        const {Id} = req.params;
        const {body} = req;
        await PagosModel.findByIdAndUpdate(Id,body);
        
        res.send({message:"Actualiza Pago Realizado Id: "+Id});

    };


module.exports = adminPagosController;