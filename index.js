const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const messageController = require('./controllers/messages.js')

app.set('view engine', 'hbs')

app.use('/messages', messageController)

app.get('/', (req, res) => {
    res.render('index')
})





module.exports = app