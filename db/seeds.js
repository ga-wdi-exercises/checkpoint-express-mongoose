const Message = require('./schema')
const seedData = require('./seeds.json')

Message.remove({})
  .then(()=>{
    return Message.collection.insert(seedData)
  })
  .then(()=>{
    process.exit()
  })
  .catch(err =>{
    console.log(err)
  })
