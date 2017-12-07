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
	Message.create(req.body.message).then(message => {
		res.redirect(`/messages/${message.id}`)
	})
})

router.get("/:id", (req, res) => {
	Message.findOne({_id: req.params.id })
		.then(message => {
			res.render("./messages/show", { message: message })
		})
		.catch(err => {
			console.log(err)
		})
})

router.put("/:id", (req, res) => {
	Message.findOneAndUpdate({ _id: req.params.id }, req.body.message, {
		new: true
	})
		.then(message => {
      console.log(message)
			res.redirect(`/messages/${message.id}`)
		})
		.catch(err => {
			console.log(err)
		})
})


module.exports = router
