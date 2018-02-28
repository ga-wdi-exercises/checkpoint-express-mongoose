const express = require('express')
const router = express.Router()
const Test = require('../models/Test')


router.get('/', (req,res) => {
  Test.find({}).then(tests => {
      res.render('tests/index', {tests})
  })
})



router.post('/', (req, res) => {
    Test.create({
        name: req.body.name,
        beerCapacity: req.body.beerCapacity
    }).then(() => {
        res.redirect('/tests')
    })
})

router.get("/new", (req, res) => {
    res.render("tests/new")
})


router.get('/edit/:id', (req, res) => {
    Test.findOne({_id: req.params.id}).then(test => {
        res.render('tests/edit', test)
    })
})

router.put('/:id', (req, res) => {
    Test.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(
      test => {
        res.redirect('/tests')
      }
    )
})

router.get("/:id", (req, res) => {
  Test.findOne({ _id: req.params.id }).then(test => {
    res.render("tests/show", test)
  })
})


router.delete('/:id', (req, res) => {
    Test.findOneAndRemove({_id: req.params.id}).then(() => {
        res.redirect('/tests')
    })
})



module.exports = router
