const adminPagosController ={};

const PagosModel = require('../Models/pagos');
const PeriodosModel = require('../Models/Periodos');

    adminPagosController.getInfoPagos = async (req,res)=>{
         //res.send('Obten Pagos');
         try {

            const pagos = await PagosModel.find().sort({departamento:-1});
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

    adminPagosController.getInfoPeriodos = async (req,res)=>{
         //res.send('Obten Pagos');
         try {

            const periodos = await PeriodosModel.find();
            res.json(periodos);
             
         } catch (error) {
             console.error(error);
         }
    };

    adminPagosController.insertInfoPeriodos = async (req,res)=>{
        const newPeriodos = new PeriodosModel(req.body);
        await newPeriodos.save();
        res.send({message:"Nuevo Periodo generado"});
    };

    adminPagosController.getInfoPagoDep = async(req,res)=>{

        console.log(req.params);
        const {Id} = req.params;
        const PagoDepto = await PagosModel.find({_id:Id});
        const {departamento} = PagoDepto[0];
        res.send({message:"Consultando Depto: "+departamento,Info:PagoDepto[0]});

    };

    adminPagosController.getInfoPagosDep = async(req,res)=>{

        console.log(req.params);
        const {depto} = req.params;
        const PagoDepto = await PagosModel.find({departamento:depto});
        res.json(PagoDepto);

    };

    adminPagosController.updatePagoRealizado = async(req,res)=>{

        console.log(req.params);
        const {Id} = req.params;
        const {body} = req;
        await PagosModel.findByIdAndUpdate(Id,body);
        
        res.send({message:"success"});

    };


module.exports = adminPagosController;