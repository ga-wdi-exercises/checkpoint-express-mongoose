console.log('database goes here')
const mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost/authors')

var AuthorsSchema = new mongoose.Schema({
  name: String,
  publisher: String,
  age: Number,
  active: Boolean
})






mongoose.model("Author", AuthorsSchema)








module.exports  =  mongoose
