const express = require('express')
const app = express()
const hbs = require('hbs')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')
const messages = require('./controllers/messages')
const mongoose = require('./db/connection')
const Message = mongoose.model('Message')

app.get('/', (req, res) => {
  res.render('index')
})



app.set('port', process.env.PORT || 3001)
app.set("view engine", "hbs")

app.use('/messages', messages)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => {
  console.log('what is thy bidding?')
})

module.exports = app
