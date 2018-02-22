const express = require('express')
const app = express ()
const hbs = require('hbs')
const bodyParser = require("body-parser")

const questionController = require('./controllers/questions')


app.set('view engine', 'hbs')

app.use('/questions', questionController)
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.render('index')
})



app.listen(4000, () => {
    console.log("app listening on port 4000")
  })
  