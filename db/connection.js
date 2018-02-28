const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/messages");

mongoose.Promise = Promise;

module.exports = mongoose;
