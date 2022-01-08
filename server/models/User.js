const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        uppercase: true,
    },
    lastName: {
        type: String,
        required: true,
        uppercase: true,
    },
    avatar: {
        type: String,
    },
    status: {
        type: String,
        enum: ["activated","not activated"],
    },
    phone: {
        type: String,
    },
    emailVerifiedAt: {
        type: Date,
    },
    totalPay: {
        type: Number,
    },
    address: {
        type: String,
    },
    about: {
        type: String,
    },
    rememberToken: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
    },
    position: {
        type: String,
        enum: ["admin","shop","user"]
    }
})

// A setter
// UserSchema.path('name').set((inputString)=>{
//     return inputString[0].toUpperCase() + inputString.slice(1)
// })
module.exports = mongoose.model('users', UserSchema)