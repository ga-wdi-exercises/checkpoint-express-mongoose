const express       = require('express')
const Message     = require('../db/connection.js')

const router        = express.Router()


router.get('/', (req, res) => {
  Message.find({}).then((messages) =>{
    res.render('messages-index', {
      messages: messages
    })
  })
})

router.post('/', (req, res) => {
  Message.create(req.body.message)
  .then ((message) => {
    res.redirect(`/messages/${message.name}`)
  })
})

router.get('/:name', (req, res) => {
  Message.findOne({ name: req.params.name })
    .then((message) => {
      res.render('messages-show', {
        message: message
      })
    })
})

router.put('/:name', (req, res) => {
  Message.findOneAndUpdate({ name: req.params.name}, req.body.message, { new: true})
  .then((message) => {
    res.redirect(`/messages/${message.name}`)
  })
})


module.exports = router
