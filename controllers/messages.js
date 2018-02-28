const express = require('express')
const router = express.Router()

const Message = require('../models/Message')

router.get('/', (req, res) => {
  Message.find({})
    .then(messages => {
      res.render('messages/index', {messages})
    })
})

router.get('/new', (req, res) => {
  res.render('messages/new')
})

router.post('/', (req, res) => {
  Message.create({
    author: req.body.author,
    body: req.body.body
  })
  .then(message => {
    res.redirect('/messages')
  })
})

router.get('/:id', (req, res) => {
  Message.findOne({_id: req.params.id})
    .then(messages => {
      res.render('messages/show', messages)
    })
})

module.exports = router
