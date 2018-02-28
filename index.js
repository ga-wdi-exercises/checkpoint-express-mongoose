const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const messagesController = require('./controllers/messages')
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(bodyParser.json())

app.use('/', messagesController)

app.listen(3000, () => console.log('It works'))

module.exports = app
