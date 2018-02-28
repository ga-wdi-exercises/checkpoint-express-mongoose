var mongoose = require("../db/connection");

var messageSchema = new mongoose.Schema({
    author: String,
    body: String
});

var Message = mongoose.model("Message", messageSchema);

module.exports = Message;