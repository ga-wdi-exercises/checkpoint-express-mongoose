const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/checkpoint', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
