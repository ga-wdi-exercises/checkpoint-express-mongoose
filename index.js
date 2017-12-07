const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const methodOverride = require('method-override')
const app = express()

const mongoose = require('./db/connection')

const Message = mongoose.model('Message')
const messages = require('./controllers/messages')

app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'layout'
}))

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(methodOverride('_method'))

app.get('/', (req, res)=>{
  res.render('layout')
})

app.use('/messages', messages)

app.listen(3000, ()=>{
  console.log('app listening on port 3000')
})

module.exports = app
