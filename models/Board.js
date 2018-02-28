const mongoose = require("../db/connection") 

const messageboardSchema = new mongoose.Schema({ 
    name: String,
    owner: String,
    type: String,
    capacity: Number
})

const Board = mongoose.model("Board", messageboardSchema) 
module.exports = Board