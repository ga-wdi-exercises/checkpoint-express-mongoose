const express = require('express')
const MessageSchema = require('../db/connection.js')
const router = express.Router()

router.get('/', (req, res) => {
  Message.find({})
    .then((message) => {

      res.render('messages-index', {
        messages: messages
      })
    })
})
module.exports = router
