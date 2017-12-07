const Schema = require('./schema')

const Message = Schema.Message

let message1 = new Message({
  author: 'Forrest Gump',
  body: "Life is like a box of chocolates. You never know what you're gonna get."
})

let message2 = new Message({
  author: 'Spice Girls',
  body: 'So tell me what you want, what you really really want.'
})

let message3 = new Message({
  author: 'Bing Crosby',
  body: "I'm dreaming of a white Christmas."
})

let messages = [message1, message2, message3]

Message.remove({})
  .catch(err => console.log(err))
  .then(() => {
    console.log('Messages removed successfully.')
    messages.forEach((message, i) => {
      messages[i].save((err, message) => {
        err ? console.log(err) : console.log(message)
      })
    })
  })
