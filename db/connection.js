const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/message')

mongoose.Promise = Promise

module.exports = mongoose