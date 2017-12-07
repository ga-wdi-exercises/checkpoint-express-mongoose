const mongoose = require('../db/connection')
const Message = mongoose.model('Message')

let post1 = new Message({
  author: 'John Doe',
  body: 'This is a new post.'
})

let post2 = new Message({
  author: 'Jane Doe',
  body: 'This is a post by Jane Doe'
})

let posts = [post1, post2]

Message.remove({})
  .catch(err => console.log(err))
  .then(() => {
    posts.forEach((p) => {
      p.save((err, p) => {
        err ? console.log(err) : console.log(p)
      })
    })
  })
