const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/checkpoint-express-mongoose', { useMongoClient: true })

module.exports = mongoose

mongoose.Promise = Promise

const MessageSchema = mongoose.Schema ({
  author: String,
  body: String,
})

const Message = mongoose.model('Message', MessageSchema)



module.exports = Message
