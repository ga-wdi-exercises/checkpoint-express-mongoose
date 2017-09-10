const mongoose = require('./db/connection.js')
const express = require('express')
const app = express()
const Author = mongoose.model('Author')
const parser = require('body-parser')

app.use(parser.json())
app.set('port', 4000)

var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});


app.post('/authors', (req, res) => {
  Author.create(req.body).then( (author) => {
    res.status(200).json(author)


  })
})


app.get("/authors", function (req,res) {
  Author.find({}).then(function(authors){
    res.status(200).json(authors)
  })
})




app.get("/authors/:_id", function (req, res) {
  Author.findOne({ _id: req.params.id}).then(function(author){
    res.status(200).json(author)
  })
})


app.put("/authors/:_id", function (req, res) {
  Author.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true}).then( (author) => {
    res.status(200).json(author)
  })
})


app.delete("/authors/:_id", function (req, res) {
  Author.findOneAndRemove({ _id: req.params.id}).then(()=>{
    res.status(200).send('author was deleted')
  })
})


app.listen(4000);

// app.listen(app.get('port'), ()=> {
//   console.log(`Listening on port ## ${app.get('port')}`)
// })

module.exports = app
