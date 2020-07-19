const mongoose = require('mongoose')

const Schema = mongoose.Schema

const carros = new Schema({
    marca: {
         type: String,
         require: true
    },
    modelo: {
        type: String,
        require: true
   },
   ano: {
    type: Number,
    require: true
},
preco_compra : {
    type: String,
    require: true
},
preco_venda: {
    type: String,
    require: true
},
data: {
    type: Date,
    default: Date.now()
}
})

mongoose.model("carros_estoque", carros)