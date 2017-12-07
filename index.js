const express         = require("express")
const hbs             = require("express-handlebars")

const mongoose        = require('./db/connection')
const MessageRouter   = require("./controllers/messages")
const Message         = mongoose.model('Message')

const app             = express()

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
  extname:        '.hbs',
  partialsDir:    'views/',
  layoutsDir:     'views/',
  defaultLayout:  'layout-main'
}))

app.get('/', (req, res) => {
  Message.find({})
    .then(messages => {
      console.log(messages)
      res.render("./index", {
        messages
      })
    })
    .catch(err => console.log(err))
})

app.use('/messages', MessageRouter)

app.listen(app.get('port'), () => {
  console.log('Ready')
})

module.exports = app
