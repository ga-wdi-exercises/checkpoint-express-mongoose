const express = require('express')
const app = express()
const hbs = require('hbs')
const mongoose = require('./db/connection')
const Message = mongoose.model('Message')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')
const router = express.Router()


app.get('/', (req, res) => {
  res.render('index')
})


app.set("view engine", "hbs")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => {
  console.log('what is thy bidding?')
})

module.exports = app
