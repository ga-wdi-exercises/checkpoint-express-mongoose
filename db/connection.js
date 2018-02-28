const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/index')

mongoose.Promise = Promise

module.exports = mongoose