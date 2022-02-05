const {Schema,model} = require('mongoose');
const PeriodosSchema = new Schema({
    mes:{type:Number,require:true},
    Inicio_Periodo:{type:Date,require:true},
    Fin_Peridoo:{type:Date,require:true}
},{
    timestamps:true,
    versionKey:false
});

module.exports = model('PeriodosAdmin',PeriodosSchema);