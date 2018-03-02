const mongoose = require('../db/connection')

const messageSchema = new Mongoose.Schema({
  Author: String,
  Body: String
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
