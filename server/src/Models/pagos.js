const {Schema,model} = require('mongoose');

const PagosSchema = new Schema({
    departamento:{type:Number,require:true},
    monto:{type:Number,require:true},
    Inicio_Periodo:{type:Date,require:true},
    departamentFin_Peridoo:{type:Date,require:true},
    pagado:{type:Boolean,require:true},
},{
    timestamps:true,
    versionKey:false
});

module.exports = model('Pagos',PagosSchema);