const express = require('express')
const app = express()
const hbs = require('hbs')
const messageBoardController = require('./controller/message')

app.set('view engine', 'hbs')







app.use('/postBoard', messageBoardController)

app.get('/', (req, res) => {
    res.send('hell0')
})

app.listen(3000, () => console.log('This is Working'))