const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.get("/new", (req, res) => {
  res.status(200).render("messages/new");
});

router.post("/", (req, res) => {
  Message.create(req.body).then(message => {
    res.redirect("/");
  });
});

router.get("/:id", (req, res) => {
  Message.findOne({ _id: req.params.id }).then(message => {
    res.render("messages/show", message);
  });
});

module.exports = router;
