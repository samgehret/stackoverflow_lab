const Question = require('../models/Questions')

const data = require('./seeds.json')

Question.remove()
    .then(() => {
      return Question.collection.insert(data)
    })
    .then(() => {
      process.exit()
    })
