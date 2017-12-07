const express = require('express')
const parser = require('body-parser')
const hbs = require('express-handlebars')

const messages = require('./controllers/messages')

const app = express()

app.set('port', process.env.PORT || 3001)
app.set('view engine', 'hbs')
app.engine('hbs', hbs({
    extname:  '.hbs',
    partialsDir: 'views/',
    layoutsDir: 'views/',
    defaultLayout: 'layout'
}))

app.use('/assets', express.static('public'))
app.use(parser.json())
app.use(parser.urlencoded({extended: true}))

app.get('/', (req,res) => {
  res.redirect("/messages")
})

app.use('/messages', messages)

app.listen(app.get('port'), () => {
  console.log('up and running!')
})

module.exports = app
