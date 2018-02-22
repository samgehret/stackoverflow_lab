const express = require('express')
const app = express ()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const questionController = require('./controllers/questions')
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use('/questions', questionController)


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(4000, () => {
    console.log("app listening on port 4000")
  })
  