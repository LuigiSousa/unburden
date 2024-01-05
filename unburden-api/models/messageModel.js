const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    messageId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    replies: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model('message', messageSchema)