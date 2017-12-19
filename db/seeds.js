const mongoose = require("./connection")
const Message = mongoose.model('Message')

let message1 = new Message({
	author: "Everett Butler",
	body: "It's tough being a Colts fan this year",
})

let message2 = new Message({
	author: "Darrel Butler",
	body: "I'm glad at least the Celtics are winning"
})

let messages = [message1, message2]


Message.remove({})
	.catch(err => console.log(err))
	.then(() => {
		console.log("Posts removed!")
		for (let i = 0; i < messages.length; i++) { //for loop for messages
			messages[i].save((err, message) => {
				if (err) {
					console.log(err)
				} else {
					console.log(message)
				}
			})
		}
	})
