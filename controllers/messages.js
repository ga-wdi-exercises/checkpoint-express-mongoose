const express = require('express')
const Message = require('../db/connection')

const router = express.Router()

router.get('/', (req, res) => {
	Message.find({}).then(messages => {
		res.render('index', {
			messages: messages
		})
	})
})

router.post('/', (req, res) => {
	Message.create(req.body.message)
		.then(message => {
			res.redirect(`/messages/${message.author}`)
		})
		.catch(err => {
			console.log(err)
		})
})

module.exports = router
