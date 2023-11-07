const mongoose = require('mongoose')
const { Schema } = mongoose;

const InventarioSchema = mongoose.Schema({
    
    id_user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    descripcion : {
        articulo : {
            type : String
        },
        size: {
            type : Number
        },
        unidad : {
            type : Number
        },
        
    },

    precio : {
        costoUnitario : {
            type : Number
        },
        total : {
            type : Number
        }
    },

    atributo : {
        color : {
            type : String
        },
        tipo : {
            type : String
        },
        marca :{
          type : String  
        }
    },

    cantidad : Number,
    date_created: Date,
    codigo_ITEM : Number

})
const InventarioModel = mongoose.model('Inventario', InventarioSchema)
module.exports = InventarioModel
