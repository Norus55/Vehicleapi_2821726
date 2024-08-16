const { model, Schema } = require('mongoose')

const OwnerSchema = new Schema({
    document: {
        type: Number,
        unique: true,//unico
        required: [true, 'the document is required'],
        maxlength: [12, 'max 12 characters'],  //tamaño maximo
        minlength: [5, 'min 5 characters']
    },
    name: {
        type: String,
        required: [true, 'the name is required'],
        minlength: [3, 'min 3 characters']  //tamaño 3 caracteres
    },
    telephone: {
        type: Number,
        required: [true, 'the telephone is required'],
        maxlength: [12, 'max 12 characters'],  //tamaño maximo
        minlength: [5, 'min 5 characters']
    },
},
    { versionKey: false }
)

module.exports = model('owner', OwnerSchema, 'owner')   //crea la coleccion si no existe y exporta