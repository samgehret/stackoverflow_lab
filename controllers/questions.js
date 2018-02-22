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
  Question.create({
    title: req.body.title,
    description: req.body.description,
    answer: [],
    date: Date.now()
  })
    .then(question => {
      res.redirect('/questions')
    })
})

router.get('/new', (req, res) => {
  res.render('questions/new')
})

router.get('/edit/:id', (req, res) => {
  Question.findOne({_id: req.params.id})
    .then(questions => {
      res.render('questions/edit', questions)
    })
})

router.put('/:id', (req, res) => {
  Question.update({_id: req.params.id}, {$push: {answer: req.body.answer}})
  .then(questions => {
    res.redirect('/questions/' + req.params.id)
  })
})

router.delete('/:id', (req,res) => {
  Question.findOneAndRemove({_id: req.params.id})
    .then(() => {
      res.redirect('/questions')
    })
})


router.get('/:id', (req, res) => {
  Question.findOne({_id: req.params.id})
    .then(questions => {
      res.render('questions/show', questions)
    })
})

module.exports = router
