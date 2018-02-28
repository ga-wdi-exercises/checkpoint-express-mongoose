const mongoose = require('../db/connection')
const Message = require("../models/Message");
const app = require("../index.js");

const MessageSchema = new mongoose.Schema({
  author: String,
  body: String
})

const Message = mongoose.model('Message', MessageSchema)
module.exports = Message
