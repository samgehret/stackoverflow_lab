const mongoose = require('../db/connections.js')

const QuestionsSchema = new mongoose.Schema({
  title: String,
  description: String,
  answer: Array,
  date: Date
})

const Question = mongoose.model('Questions', QuestionsSchema)

module.exports = Question
