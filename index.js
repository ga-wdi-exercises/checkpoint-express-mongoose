const express = require('express');

const hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

const MessageController = require('./controllers/messages');

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render("index");
});

app.use('/messages', MessageController);

app.listen(3000, () => console.log("does this work"));

module.exports = app
