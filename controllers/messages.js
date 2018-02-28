const express = require('express')
const router = express.Router()
const Message = require('../models/Message')

router.get('/', (req, res) => {
    res.render('messages/show')
})

router.get('/new', (req, res) => {
    res.render('messages/new')
})

router.get('/:id', (req, res) => {
    res.render('messages/show')
})

module.exports = router
