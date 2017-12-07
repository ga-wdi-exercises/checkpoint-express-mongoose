const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/checkpoint-express-mongoose', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose


const MessageSchema = new mongoose.Schema({
  author: String,
  body: String
})

const messages = mongoose.model('Message', MessageSchema)

module.exports = messages
