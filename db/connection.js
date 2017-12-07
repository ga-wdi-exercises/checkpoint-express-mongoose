const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/checkpoint', { useMongoClient: true })

mongoose.Promise = Promise

const MessageSchema = new mongoose.Schema({
  author: String,
  body: String
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = mongoose
