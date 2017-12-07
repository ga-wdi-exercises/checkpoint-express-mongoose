const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')

const mongoose = require('./db/connection')
const Message = mongoose.model('Message')

const messagesController = require('./controllers/messagesController')

const app = express()

app.set('view engine', 'hbs')

app.use(parser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	res.render('index')
})

app.use('/messages', messagesController)

app.listen(3000, () => {
	console.log('You are connected!')
})

module.exports = mongoose
