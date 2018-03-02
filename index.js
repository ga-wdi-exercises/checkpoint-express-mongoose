const express = require('express')
const hbs = require('hbs')
const mongoose = require('')

const app = express()

app.set('view engine', 'hbs')

// define a route
app.get('/', (req, res) => {
  res.send('Hello Universe!')
})

// start our server
app.listen(3000, () => console.log('This is working on port 3000'))

module.exports = app
