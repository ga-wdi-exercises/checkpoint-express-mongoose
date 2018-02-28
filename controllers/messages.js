const express = require('express');
const router = express.Router();

const Message = require('../models/message');

router.get('/', (req, res) => {
    Message.find({}).then(message => {
        res.render('messages/index', { message });
        });
});

module.exports = router;