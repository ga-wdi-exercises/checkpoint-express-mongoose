const express = require('express')

const mongoose = require('../db/connection')
const Message = mongoose.model('Message')

const router = express.Router()

router.get('/', function(req, res){
  Message.find({}).sort('-date')
  .then(function(messages){
    res.render('index', {
      messages: messages
    })
  })
})

router.get('/new', function(req, res) {
    res.render('messages/new', {
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
    res.render("messages/show", {
      message: message
    })
  })
})

module.exports = router
