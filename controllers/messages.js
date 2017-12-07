const express = require('express')
const mongoose = require('../db/connection')
const Message = mongoose.model('Message')

const router = express.Router()

router.get('/', (req, res) => {
  Message.find({})
    .then(messages => {
      res.render('index', {
        messages: messages
      })
    })
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  Message.create(req.body.message)
    .then(message => {
      res.redirect(`/${message.id}`)
    })
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
  Message.findById(req.params.id)
    .then(message => {
      res.render('show', {
        message: message
      })
    })
    .catch(err => console.log(err))
})

module.exports = router
