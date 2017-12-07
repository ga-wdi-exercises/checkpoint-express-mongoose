const mongoose = require("./connection")
const Message = mongoose.model('Message')

let message1 = new Message({
	author: "Ernest Hemingway",
	body: "something about an old man and a sea",
})

let message2 = new Message({
	author: "William Shakespeare",
	body: "something about two 13 year olds hooking up",
})

let message3 = new Message({
	author: "Cormac McCarthy",
	body: "a dad, a kid, a road",
})

let messages = [message1, message2, message3]


Message.remove({})
	.catch(err => console.log(err))
	.then(() => {
		console.log("Posts removed!")
		for (let i = 0; i < messages.length; i++) {
			messages[i].save((err, message) => {
				if (err) {
					console.log(err)
				} else {
					console.log(message)
				}
			})
		}
	})
