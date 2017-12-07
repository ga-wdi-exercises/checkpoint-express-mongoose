const mongoose = require('./db/connection')
const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')

const messages = require('./controllers/messages')

const app = express()

const Message = mongoose.model('Message')

app.set('view engine', 'hbs')

app.use(parser.json())
app.use(parser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	res.redirect('/messages')
})

app.use('/messages', messages)

app.listen(3000, () => {
	console.log('you are connected')
})

module.exports = app
