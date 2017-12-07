const express           = require('express')
const hbs               = require('express-handlebars')
const app               = express()
const parser            = require('body-parser')
const messagesController   = require('./controllers/messages')
const methodOverride    = require('method-override')

const mongoose = require ('./db/connection')
const Message = mongoose.model('Message')

app.set("view engine", "hbs")
app.engine('.hbs', hbs({
  extname:        '.hbs',
  partialsDir:    'views/',
  layoutsDir:     'views/',
  defaultLayout:  'layout'
}))

app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.render('homepage')
})

app.use('/messages', messagesController)

app.listen(3000, () => {
  console.log("app listening on port 3000")
})

module.exports = app
