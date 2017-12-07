const mongoose = require('./db/connection')
const Message = mongoose.model('Message')
const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const methodOverride = require('method-override')

const messages = require('./controllers/messages')

const app = express()

app.set('view engine', 'hbs')

app.engine(
	'.hbs',
	hbs({
		extname: '.hbs',
		partialsDir: 'views/',
		layoutsDir: 'views/',
		defaultLayout: 'layout-main'
	})
)
app.use(parser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
	res.render('index')
})

app.use('/messages', messages)

app.listen(3000, () => {
	console.log('app listening on port 3000')
})
