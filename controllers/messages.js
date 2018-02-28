const express = require('express')
const router = express.Router()
const Message = require('../models/Message')

router.get('/', (req, res) => {
  Message.find({}).then(mess => {
    res.render('/', mess)
  })
})

router.get('/new', (req, res) => {
  res.render('messages/new')
})

module.exports = router
