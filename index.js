const express = required('express')
const app = express()
const bodyParser = require('body-parser')
const hbs = require('hbs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.set('view engine', 'hbs')



module.exports = app

