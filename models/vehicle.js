const { model, Schema } = require('mongoose');

const VehicleSchema = Schema({
    plate: {
        type: String,
        unique: true,
        required: [true, 'The plate is required'],
        maxlength: [6, 'Max 6 characters'],
        minlength: [5, 'Min 5 characters']
    },
    color: {
        type: String,
        required: [true, 'The color is required'],
        minlength: [3, 'Min 3 characters']
    },
    model: {
        type: Number,
        required: [true, 'The model is required'],
    },
},
    { versionKey: false }
)

module.exports = model('vehicle', VehicleSchema, 'vehicle')