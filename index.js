const express = require('express')
const app = express()
const hbs = require('hbs')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')
const messages = require('./controllers/messages')
const mongoose = require('./db/connection')
const Message = mongoose.model('Message')


app.get('/', (req, res) => {
  Message.find({})
    .then((messages) => {

      res.render('index', {
        messages: messages
      })
    })
})

app.get('/messages/new', (req, res) => {
  res.render('./messages/new')
})

app.get('/messages/:id', (req, res) => {
  Message.findById(req.params.id)
    .then((message) => {
      res.json(message)
    })
    .catch((err) => {
      res.status(200).json(err)
    })
})

app.post('/messages', (req, res) => {
  Message.create(req.body)
  .then((message) => {
    res.redirect(`/messages/${req.params.id}`)
  })
  .catch((err) => {
    res.status(200).json(err)
  })
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
