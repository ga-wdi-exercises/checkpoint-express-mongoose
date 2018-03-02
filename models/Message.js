const mongoose = require("../db/connection");
const messageSchema = new mongoose.Schema({
  author: String,
  body: String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
