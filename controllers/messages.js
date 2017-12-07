const express = require("express")
const mongoose = require("../db/connection")
const Message = mongoose.model("Message")

const router = express.Router()

router.get("/", (req, res) => {
  Message.find({})
    .then(messages => {
      res.render("messages/index", {
        messages: messages
      })
    })
    .catch(err => {
      console.log(err)
    })
})

router.post("/", (req, res) => {
  Message.create(req.body.message)
    .then(message => {
      res.redirect(`/messages/${message._id}`)
    })
    .catch(err => {
      console.log(err)
    })
})

router.get("/:id", (req, res) => {
  Message.findOne({ _id: req.params.id })
    .then(message => {
      res.render("messages/show", {
        message: message
      })
    })
    .catch(err => {
      console.log(err)
    })
})

router.get("new", (req, res) => {
  Message.find({})
    .then(messages => {
      res.render("messages/new", {
        messages: messages
      })
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
