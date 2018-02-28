const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const messageController = require('./controllers/messages')
const Message = require('./models/Message')

app.use(bodyParser())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  Message.find({})
    .then(messages => {
      res.render('messages/index', {messages})
    })
})

app.use('/messages', messageController)

app.listen(4000, () => {
  console.log('app listening on port 4000')
})

module.export = app
