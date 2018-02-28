const mongoose = require('../db/connection')

const MessageBoardSchema = new mongoose.Schema({
  title: String,
  author: String
})

const MessageBoard = mongoose.model('MessageBoard', MessageBoardSchema)

module.exports = MessageBoard
