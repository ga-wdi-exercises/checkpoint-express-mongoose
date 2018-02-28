const Test = require('../models/Test')
const data = require('./seeds.json')

Test.remove({})
  .then(() => {
      return Test.collection.insert(data)
  })
  .then(() => {
      process.exit()
  })
