const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/checkpoint-express-mongoose', {
	useMongoClient: true
})

mongoose.Promise = Promise

const MessageSchema = new mongoose.Schema({
	author: String,
	body: String
})

mongoose.model('Message', MessageSchema)

module.exports = mongoose
