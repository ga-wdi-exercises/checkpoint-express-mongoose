const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/messages_db', {useMongoClient: true})

mongoose.Promise = Promise

const MessageSchema = mongoose.Schema({
	author: String,
	body: String
})

const Message = mongoose.model('Message', MessageSchema)

let message1 = new Message({
	author: 'Sarah',
	body: 'hello world'
})

let message2 = new Message({
	author: 'Sarah',
	body: 'bye'
})

let messages = [message1, message2]

Message.remove({})
	.catch(err => console.log(err))
	.then(() => {
		console.log('messages removed successfully')

		messages.forEach((message, i) => {
			messages[i].save((err, message) => {
				err ? console.log('error creating message') : console.log(message)
			})
		})
	})

module.exports = mongoose
