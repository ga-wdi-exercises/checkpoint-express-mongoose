const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const messageController = require('./controllers/messages')

const app = express()
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/messages', messageController)

app.listen(3000, () => { console.log('Works') })
