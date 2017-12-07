const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/messages', {useMongoClient: true})
mongoose.Promise = Promise

const db = mongoose.connection

db.on('error', err => console.log('Did not connect'))
db.once('open', () => console.log('what is thy bidding?'))

const MessageShema = mongoose.Schema({
  author: String,
  body: String
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = mongoose
module.exports = Message
