import { Schema, model, models } from 'mongoose'

const product = new Schema({
    title: {
        type: String,
        required: [true, 'El título es requerido'],
        unique: true,
        trim: true,
        maxlength: [40, 'El título puede tener un máximo de 40 caracteres']
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [200, 'Máximo de 200 caracteres']
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.product || model('product', product)