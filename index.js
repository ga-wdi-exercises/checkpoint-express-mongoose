const mongoose = require('./db/connection')
const Message = mongoose.model('Message')
const express = require('express')
const parser = require('body-parser')
const hbs = require('express-handlebars')

const app = express()

const messages = require('./controllers/messages')

app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'layout'
}))

app.use(parser.json())

app.set('port', process.env.PORT || 3001)
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.redirect('/messages')
})

app.use(parser.urlencoded({entended: true}))

app.use('/messages', messages)

app.listen(app.get('port'), () => {
  console.log('Up and running!')
})

module.exports = app
