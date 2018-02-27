const mongoose = require('./connection')
const Schema = mongoose.Schema
const MessageSchema = new Schema({
  author: String,
  body: String
})

const Message = mongoose.model('Message', MessageSchema)
module.exports = mongoose
