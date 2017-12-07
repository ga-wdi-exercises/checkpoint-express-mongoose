const express       = require('express')
const Candidate     = require('../db/connection.js')

const router        = express.Router()


router.get('/', (req, res) => {
  Message.find({}).then((messages) =>{
    res.render('messages-index', {
      messages: messages
    })
  })
})


module.exports = router
