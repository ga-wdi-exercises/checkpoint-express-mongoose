const mongoose = require('mongoose') 

mongoose.connect("mongodb://localhost/messageboard")

module.exports = mongoose