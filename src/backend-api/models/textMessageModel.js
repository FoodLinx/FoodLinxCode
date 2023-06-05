const mongoose = require('mongoose')

const Schema = mongoose.Schema

const textMessageSchema = new Schema({
    message: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Message', textMessageSchema)