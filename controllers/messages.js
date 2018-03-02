const express = require("express");
const router = express.Router();

const Message = require("../models/Message.js");
router.get("/", (req, res) => {
  Message.find({}).then(messages => {
    res.render("messages/index", { messages });
  });
});

router.get("/new", (req, res) => {
  res.render("messages/new");
});
module.exports = router;
