const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/messageboard", { useMongoClient: true })
mongoose.Promise = Promise

const db = mongoose.connection

db.on("error", err => console.log("Connection failed"))
db.once("open", () => console.log("Connection established"))

const MessageSchema = new mongoose.Schema({
  author: String,
  body: String
})

mongoose.model("Message", MessageSchema)

module.exports = mongoose
