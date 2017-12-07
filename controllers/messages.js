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

router.get("/new", (req, res) => {
		res.render("./messages/new")
})


router.post("/", (req, res) => {
  console.log(req.body.message)
	Message.create(req.body.message).then(message => {
		res.redirect(`/messages/${message.body}`)
	})
})

router.get("/:body", (req, res) => {
	Message.findOne({ body: req.params.body })
		.then(message => {
			res.render("./messages/show", { message: message })
		})
		.catch(err => {
			console.log(err)
		})
})

router.put("/:body", (req, res) => {
	Message.findOneAndUpdate({ body: req.params.body }, req.body.message, {
		new: true
	})
		.then(message => {
			res.redirect(`/messages/${message.body}`)
		})
		.catch(err => {
			console.log(err)
		})
})


module.exports = router
