const mongoose = require('../db/connection')

var MessageSchema = new mongoose.Schema({
    author: String,
    body: String
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message
