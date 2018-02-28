let express = require('express')
let app = express()
let hbs = require('hbs')

let reqMessagesController = require('../controllers/messages.js')

app.set('view engine', 'hbs')


app.get('/', (req, res) => {
  res.render('index')
})

app.use('/messages', reqMessagesController) 


