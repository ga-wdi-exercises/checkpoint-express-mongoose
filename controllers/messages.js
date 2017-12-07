const express       = require('express')
const mongoose      = require('../db/connection')
const Message       = mongoose.model('Message')
const router        = express.Router()

router.get('/new', (req, res) => {
  Message.find({})
    .then(messages => {
      res.render("./messages/messages-new", {
        messages: messages
      })
    })
    .catch(err => console.log(err))
})

router.post('/new', (req, res) => {
  Message.create(req.body.message)
    .then(message => {
      res.redirect(`/messages/${message.author}`);
    })
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
  Message.findOne({author: req.params.author})
    .then(messages => {
      res.render("./messages/messages-show", {
        messages: messages
      })
    })
    .catch(err => console.log(err))
})


module.exports = router
