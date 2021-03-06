const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    customer: {
        type: String,
        required: true,
        maxlength: 60
    },
    address: {
        type: String,
        required: true,
        maxlength: 200
    },
    total: {
        type: Number,
        required: true
    },
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    status: {
        type: Number,
        default: 0
    },
    method: {
        type: Number,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('order', OrderSchema) || mongoose.models.order
