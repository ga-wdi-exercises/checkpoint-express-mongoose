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
// router.get('/:author', (req, res) => {
//   Message.findOne({ author: req.params.author })
//   .then((messageOutput) => {
//     res.render('messages-show', {
//       message: messageOutput
//     })
//   })
//
// })
//
// router.post('/', (req, res) => {
//   Message.create(req.body.message)
//     .then((message) => {
//       res.redirect(`/messages/${message.author}`)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })
//
// router.put('/:author' (req, res) => {
//   Message.findOneAndUpdate({ author: req.params.author }, req.body.message , { new: true })
//     .then((messagee) => {
//       res.redirect(`/messages/${message.author}`)
//     })
// })
//
// router.delete('/:author', (req, res) => {
//   Message.findOneAndRemove({ author: req.params.author })
//     .then(() => {
//       res.redirect('/messages')
//     })
// })


module.exports = router
