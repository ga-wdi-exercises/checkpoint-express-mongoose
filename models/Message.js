let mongoose = require('../db/connection')

let MessageSchema = new mongoose.Schema({
    author: String,
    body: String,
  })

let Message = mongoose.model("Message", MessageSchema)

module.exports = Message