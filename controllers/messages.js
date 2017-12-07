const express   = require('express')
const mongoose = require ('../db/connection')
const Message = mongoose.model('Message')

const router    = express.Router()


router.get('/', (req, res) => {
  Message.find({})
    .then((messages) => {
      res.render('index', {
        messages: messages
      })
    })
})

router.get('/:id', (req, res) => {
  Message.findOne({ author: req.params.author })
  .then((messageOutput) => {
    res.render('messages/show', {
      message: messageOutput
    })
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/', (req, res) => {
  Message.create(req.body.message)
    .then((message) => {
      res.redirect(`/messages/`)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.put('/:id', (req, res) => {
  Message.findOneAndUpdate({ body: req.params.body }, req.body.post , { new: true })
    .then((message) => {
      res.redirect(`/messages/`)
    })
})


module.exports = router
