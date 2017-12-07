const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/Checkpoint', {useMongoClient: true})

let MessageSchema = new mongoose.Schema({
  body: String,
  author: String,
  date: {"type": Date, "default": Date.now}
})

mongoose.model('Message', MessageSchema)

module.exports = mongoose
