const express = require('express')
const hbs = require('hbs')
// const app = express()

let mongoose = require('../db/connection')
let Message = mongoose.model('Message')
// let app = require("../index.js");

const messagesController = require('./controllers/messages')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render(status(200))
})
