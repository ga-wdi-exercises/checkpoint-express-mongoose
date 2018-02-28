const express = require('express')
const router = express.Router()

const newMessages = require('../models/Message')

router.get('/', (req, res) => {
  newMessages.find({}).then(messages => {
    res.render('posts/index', { messages })
    // console.log(messages)
  })
})

module.exports = router
