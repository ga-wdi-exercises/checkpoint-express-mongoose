const express = require('express');
const router = express.Router();

const Message = require('../models/message');

router.get('/', (req, res) => {
    Message.find({}).then(message => {
        res.render('messages/index', { message });
        });
});

router.get('/:id', (req, res) => {
    Message.findOne({ _id: req.params.id }).then(message => {
        res.render("messages/show", message);
    });
  });

module.exports = router;