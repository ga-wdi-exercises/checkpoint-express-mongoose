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

router.post('/messages', (req, res) => {
  Message.create(req.body.message)
    .then((message) => {
      res.redirect(`/messages/:id`)
    })
    .catch((err) => {
      console.log(err)
    })
})



module.exports = router
