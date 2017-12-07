const mongoose = require('./db/connection')
const Message = mongoose.model('Message')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  Message.find({})
    .then(messages => {
      res.render('index', {
        messages: messages
      })
    })
    .catch(err => console.log(err))
})

app.get('/:id', (req, res) => {
  Message.findById(req.params.id)
    .then(message => {
      res.render('show', {
        message: message
      })
    })
    .catch(err => console.log(err))
})

app.listen(3000, () => {
  console.log('You are now connected to port 3000!')
})

module.exports = app
