const Message = require('./connection')
const seedData = require('.seeds.json')

Message.remove({})
  .then(() => {
    return Messgae.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
  .catch((err) => {
    console.log(err)
  })
