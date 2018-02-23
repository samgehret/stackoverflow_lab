const express = require('express')
const app = express ()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const passport = require('passport')
const flash = require('connect-flash')
//const sessions = require('express-sessions')


const questionController = require('./controllers/questions')
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use('/questions', questionController)

app.use(flash())


app.get('/', (req, res) => {
    res.redirect('/questions')
})

app.listen(4000, () => {
    console.log("app listening on port 4000")
  })
  