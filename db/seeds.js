const Schema = require('./connection')

const Message = Schema.Message

let message1 = new Message({
  author: 'Stella',
  body: 'This is the first message for the checkpoint'
})

let message2 = new Message({
  author: 'Sarah',
  body: 'This is the second message for the checkpoint'
})

let messages = [message1, message2]

Message.remove({})
  .catch(err => console.log(err))
  .then(() => {
    console.log('Messages removed successfully!')
  })
