const MessageSchema = require('../db/connection.js')
const Author = MessageSchema.Author

router.get('/', (req, res) => {
  Message.find({})
    .then((message) => {
      res.render('messages-index', {
        messages: messages
      })
    })
})



module.exports = router
