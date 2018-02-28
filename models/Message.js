const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create SChema

const MessageSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Message", MessageSchema);
