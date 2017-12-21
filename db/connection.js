const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/messages', {useMongoClient: true})

mongoose.Promise = Promise

const Schema = mongoose.Schema
const MessageSchema = new Schema({
  author: String,
  body: String
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = mongoose
