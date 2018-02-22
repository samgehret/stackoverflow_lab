const express = require('express')
const router = express.Router()

const Question = require('../models/Questions')

router.get('/', (req, res) => {
  Question.find({})
        .then(questions => {
          res.render('questions/index', {questions})
        })
})

router.get('/:id', (req, res) => {
  Question.findOne({_id: req.params.id})
    .then(questions => {
      res.render('questions/show', questions)
    })
})

module.exports = router
