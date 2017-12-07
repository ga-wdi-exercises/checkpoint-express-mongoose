const mongoose = require('./db/connection')
const Message = mongoose.model('Message')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')

const messagesController = require('./controllers/messages')

const app = express()

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.render('index')
})

app.use('/messages', messagesController)

app.listen(3000, () => {
  console.log('You are now connected to port 3000!')
})

module.exports = app
