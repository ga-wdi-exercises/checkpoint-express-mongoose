const mongoose = require("../db/connection");

const Message = new mongoose.Schema({
  message: String
});

const Message = mongoose.model("Message", Message);
module.exports = Message;
