const express = require("express");
const mongoose = require("../db/connection");
const Message = mongoose.model("Message");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body);
  console.log("***");
  Message.find({}).then(messages => {
    console.log(messages);
    res.render("index", { messages: messages });
  });
});

router.post("/", (req, res) => {
  console.log("hi");
  console.log(req.body);
  Message.create(req.body.message).then(message => {
    console.log(message);
    res.redirect(`/messages/${message.author}`).catch(err => {
      console.log(err);
    });
  });
});

router.get("/:name", (req, res) => {
  Message.findOne({ name: req.params.author }).then(message => {
    res.render("show", { message: message });
  });
});

module.exports = router;
