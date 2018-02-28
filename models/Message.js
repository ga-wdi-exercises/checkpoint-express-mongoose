const mongoose = require("../db/connection")

const MessageSchema = new mongoose.Schema({
    name: String,
    beerCapacity: Number
})

const Test = mongoose.model("Test", MessageSchema)

module.exports = Message
