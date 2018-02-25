const mongoose = require('../db/connections')

const QuestionsSchema = new mongoose.Schema({
  title: String,
  owner: String,
  description: String,
  answer: Array,
  date: Date
})

const Question = mongoose.model('Question', QuestionsSchema)

module.exports = Question
