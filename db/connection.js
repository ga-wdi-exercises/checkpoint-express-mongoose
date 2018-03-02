const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/')
mongoose.Promise = Promise
module.exports = mongoose
