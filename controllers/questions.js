const express = require('express')
const router = express.Router()

const Question = require('../models/Questions')
// const User = require('../models/Users')

router.get('/', (req, res) => {
  Question.find({}).sort({date: 'descending'})
        .then(questions => {
          res.render('questions/index', {questions})
        })
})

// module.exports.getQuestions = (id) => {
//   return Questions.find({}).sort({ date: -1 })
// }

router.post('/', (req, res) => {
  Question.create({
    title: req.body.title,
    owner: req.user.local.email,
    description: req.body.description,
    answers: [],
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
  Question.findOne({ _id: req.params.id })
    .then(question => {
      question.answers.push({
        answerText: req.body.answer,
        responder: req.user.local.email,
        dateAnswer: Date.now()
      })
      question.save()
      res.redirect('/questions/' + req.params.id)
    })
  // Question.update({_id: req.params.id}, {$push: {"answerText": req.body.answer}})
  // .then(questions => {
  //   res.redirect('/questions/' + req.params.id)
  // })
})

router.delete('/:id', (req, res) => {
  Question.findOneAndRemove({_id: req.params.id})
    .then(() => {
      res.redirect('/questions')
    })
})

router.get('/:id', (req, res) => {
  Question.findOne({_id: req.params.id})
    .then(questions => {
      var sortedAnswers = questions.answers
      sortedAnswers.sort(function (a, b) {
        return b.dateAnswer - a.dateAnswer
      })
      res.render('questions/show', {questions, sortedAnswers})
})

module.exports = router
