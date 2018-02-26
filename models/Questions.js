const mongoose = require('../db/connections')

const AnswersSchema = new mongoose.Schema({
  answerText: String,
  responder: String,
  dateAnswer: Date
})

const QuestionsSchema = new mongoose.Schema({
  title: String,
  owner: String,
  description: String,
  answers: [AnswersSchema],
  date: {
    type: Date,
    default: Date.now()
  }
})

const Question = mongoose.model('Question', QuestionsSchema)

module.exports = Question
