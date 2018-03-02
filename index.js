const express = require('express')
const hbs = require('hbs')
const Message = require('./models/Message')
const messagesController = require('./controllers/messages')
const parser = require('body-parser')

const app = express()

app.set('view engine', 'hbs')

// define a route
app.get('/', (req, res) => {
  Message.find({}).then(message => {
    res.render('index', { message })
  })
  //   res.render('index')
})

app.use('/messages', messagesController)

// start our server
app.listen(3000, () => console.log('This is working on port 3000'))

module.exports = app
