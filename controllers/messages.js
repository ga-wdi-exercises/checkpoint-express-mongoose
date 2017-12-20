const express = require('express')
const MessageSchema = require('../db/connection.js')
const router = express.Router()

// /messages
router.get('/', (req, res) => {
  Message.find({})
    .then((message) => {

      res.render('messages-index', {
        messages: messages
      })
    })
})

router.get('/messages/:id', (req, res) => {
  Message.findById(req.params.id)
    .then((message) => {
      res.json(message)
    })
    .catch((err) => {
      res.status(200).json(err)
    })
})

router.post('/messages', (req, res) => {
  Message.create(req.body)
  .then((message) => {
    res.redirect(`/messages/${req.params.id}`)
  })
  .catch((err) => {
    res.status(200).json(err)
  })
})


module.exports = router
