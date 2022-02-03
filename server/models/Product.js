const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    pro_name: {
        type: String,
        required: true,
        unique: true
    },
    pro_slug: {
        type: String,
    },
    pro_description: {
        type: String,
    },
    pro_avatar: {
        type: String,
    },
    pro_sub_avatar: {
        type: [String],
    },
    pro_new_price: {
        type: Number,
    },
    pro_old_price: {
        type: Number,
        default: 0
    },
    pro_quantity: {
        type: Number,
        min: 0,
    },
    pro_category_id: {
        type: String,
    },
    pro_author_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    pro_sale: {
        type: Number,
    },
    pro_status: {
        type: String,
        enum: ["In stock","Sold out"]
    },
    pro_pay: {
        type: Number,
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    },
    update_by: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    view_counts: {
        type: Number
    },
    meta: {
        votes: {
            type: Number
        },
        favs:  {
            type: Number
        }
    }
})

module.exports = mongoose.model('products', ProductSchema)
