const message = require('../models/Message')

const data = require('./seeds.json')

message.remove({})
  .then(() => {
    return message.collection.insert(data)
  })
  .then(() => {
    process.exit()
  })