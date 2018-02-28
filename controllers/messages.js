const express = require('express')
const router = express.Router()
const Message = require('../models/Message.js')

router.get('/', (req, res) => {
  Message.find({})
  .then(message => {
    res.render('index', {message})
  })
})
router.post('/', (req, res) => {
  Message.create({
    author: req.body.author,
    body: req.body.body
  }).then(message => {
    res.redirect('/messages')
  })
})

router.get('/new', (req, res) => {
  res.render('messages/new')
})

router.get('/:id', (req, res) => {
  Message.findOne({ _id: req.params.id})
    .then(message => {
      res.render('messages/show', message)
    })
})

module.exports = router
