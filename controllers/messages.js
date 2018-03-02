const express = require('express')
const router = express.Router()
const Message = require('../models/Message')

//post
router.post('/', (req, res) => {
  Message.create(req.body).then(Message => {
    res.redirect(`/Messages/:id`)
  })
})

// get new view for a new Message
router.get('/new', (req, res) => {
  res.render('Messages/new')
})

module.exports = router
