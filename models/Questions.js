const mongoose = require('../db/connections.js')

const QuestionsSchema = new mongoose.QuestionsSchema({
    title: String,
    description: String,
    answer: Array,
    date: Date
})

const Question = mongoose.model('Question', QuestionsSchema)

module.export = Question