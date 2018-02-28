const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/messages_db')

mongoose.Promise = Promise

module.exports = mongoose
