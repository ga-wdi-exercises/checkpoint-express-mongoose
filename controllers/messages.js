const express= require('express')
const mongoose = require('../db/connection')
const Message = mongoose.model('Message')

const router = express.Router()

router.get('/', (req, res)=>{
  Message.find({})
  .then(messages =>{
    res.render('index', {
      messages: messages
    })
  })
})

router.post('/', (req,res)=>{
  Message.create(req.body.message)
    .then(message =>{
      res.redirect('/messages/${message.body}')
    })
    .catch(err => {
      console.log(err)
    })
  })

router.get('/:id', (req, res) =>{
  Message.findByID(req.params.id)
    .then(messageResult =>{
      res.render('show', {
        message: messageResult
      })
    })
  })

router.put('/:body', (req,res) =>{
  Message.findOneAndUpdate({body: req.params.body}, req.body.message, {
    new:true
  }).then(message => {
    res.redirect(`/messages/${message.body}`)
  })
})

router.get('/messages/new', (req,res) =>{
  res.render('new')
})


module.exports = router
