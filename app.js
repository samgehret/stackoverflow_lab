const express = require('express')
const app = express ()
const hbs = require('hbs')
const questionController = require('./controllers/question')


app.set('view engine', 'hbs')

app.use('/questions', questionController)


app.get('/', (req, res) => {
    res.render('index')
})



app.listen(4000, () => {
    console.log("app listening on port 4000")
  })
  