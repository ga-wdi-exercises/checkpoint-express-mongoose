const mongoose        = require('./connection')
const Message         = mongoose.model('Message')

Message.remove({})
  .then(() => {
    return Message.collection.insert([{
        author: "Jim",
        body:   "Hey, everyone!"
      },{
        author: "Tom",
        body: "Hi, Jim!"
      }
    ])
  })
  .then(() => {
    process.exit()
  })
  .catch(err => console.log(err))
