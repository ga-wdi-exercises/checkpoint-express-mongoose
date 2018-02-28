const mongoose = require('mongoose')

const Message = mongoose.model('Message', new mongoose.Schema({
  author: String,
  body: String
}))

module.exports = Message
