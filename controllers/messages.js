const express = require('express')

const mongoose = require('../db/connection')
const Message = mongoose.model('Message')

const router = express.Router()

router.get('/', function(req, res){
  Message.find({}).sort('-date')
  .then(function(messages){
    res.render('message-index', {
      messages: messages
    })
  })
})


router.post("/", function(req, res){
  Message.create(req.body.message)
  .then(function (message){
    res.redirect("/messages")
  })
})

router.get("/:id", function(req, res){
  Message.findOne({_id: req.params.id})
    .then((message) => {
    res.render("message-show", {
      message: message
    })
  })
})

module.exports = router
