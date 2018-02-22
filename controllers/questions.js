const express = require('express')
const router = express.Router()

const Question = require('../models/Questions')

router.get('/', (req, res) => {
  Question.find({})
        .then(questions => {
          res.render('questions/index', {questions})
        })
})

router.post('/', (req, res) => {
  console.log("the title is:" + req.body.title)
  Question.create({
    title: req.body.title,
    description: req.body.description,
    answer: [],
    date: "Feb-19-2018"
  }) 
    .then(question => {
      res.redirect('/questions')
    })
})


router.get('/new',(req, res) => {
  console.log("Getting new page")
  res.render('questions/new')
})

router.get('/:id', (req, res) => {
  Question.findOne({_id: req.params.id})
    .then(questions => {
      res.render('questions/show', questions)
    })
})

module.exports = router
