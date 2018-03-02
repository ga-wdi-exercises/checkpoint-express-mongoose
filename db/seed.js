const Message = require('../models/Message')

Message.remove({}).then(() => {
  Promise.all([
    Message.create({
      Author: 'Daniel',
      Body: 'Somehow I write this stuff'
    })
  ]).then(() => {
    console.log('done')
    process.exit()
  })
})
