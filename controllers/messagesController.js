const express = require('express')
const Schema = require('../db/connection')

const Message = Schema.Message

const router = express.Router()

router.get('/', (req, res) => {
  Message.find({})
    .then((messages) => {
      res.render('index'), {
        messages: messages
      }
    })
})

router.post('/', (req, res) => {
  Message.create(req.body.message)
  .then((message) => {
    res.redirect(`/messages/${message.id}`)
  })
  .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
	Message.findById(req.params.id)
		.then(question => {
			res.render('messages-show', {
				message: message
			})
		})
		.catch(err => console.log(err))
})
module.exports = router
