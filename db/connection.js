const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    name: Author,
    year: Body
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = mongoose
