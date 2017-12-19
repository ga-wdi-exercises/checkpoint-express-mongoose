const express = require("express")
const mongoose = require("../db/connection")
const Message = mongoose.model('Message')
const router = express.Router()

router.get("/", (req, res) => {
	Message.find({}).then(messages => {
		res.render("./index", {
			messages: messages
		})
	})
})
