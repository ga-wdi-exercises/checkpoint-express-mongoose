const mongoose = require("../db/connection");

const MessagesSchema = new mongoose.Schema({
  author: String,
  body: String
});

const Message = mongoose.model("Message", MessagesSchema);

module.exports = Message;
