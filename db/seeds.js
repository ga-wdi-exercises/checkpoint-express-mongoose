const Message = require('./schema.js')
const seedData = require('./seeds.json')

Message.remove({})
  .then(() => {
    return Message.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
  .catch((err) => {
    console.log(err)
  })
