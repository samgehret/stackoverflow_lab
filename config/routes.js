// Part 1:

// question controller:

module.exports.getQuestions = (req, res) => {
    Questions.find({}).sort({ date: -1 })
        .then(questions => {
            res.render('questions/index', { questions })
        })
}

// routes:
const questions = require('../controllers/questions')

app.get('/', questions.getQuestions)
app.get('/question', questions.getQuestions)

// Part 2:

// question controller:

module.exports.getQuestions = (id) => {
    return Questions.find({}).sort({ date: -1 })
}

// routes:
const questions = require('../controllers/questions')

app.get('/', (req, res) => {
    questions.getQuestions()
        .then(questions => {
            res.render('index', {questions})
        })
})
app.get('/question', (req, res) => {
    questions.getQuestions()
        .then(questions => {
            res.render('questions/index', { questions })
        })
})