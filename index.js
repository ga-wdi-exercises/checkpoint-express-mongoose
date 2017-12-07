const express        = require('express')
const hbs            = require('express-handlebars')
const mongoose       = require('./db/connection')
const Message        = mongoose.model('Message')

const candidates    = require('./controllers/messages')

const app           = express()

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'hbs')

app.listen(app.get('port'), () => {
  console.log('It\'s aliiive!')
})


app.listen(app.get("port"), () => {
	console.log("It's aliiive!")
})
 module.exports = app
