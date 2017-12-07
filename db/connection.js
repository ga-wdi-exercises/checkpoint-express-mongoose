const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/checkpointexpress", {
  useMongoClient: true
});
mongoose.Promise = Promise;

const MessagesSchema = new mongoose.Schema({
  author: String,
  body: String
});

const Message = mongoose.model("Message", MessagesSchema);

module.exports = mongoose;
