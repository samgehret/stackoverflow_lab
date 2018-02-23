const express = require('express')
const app = express ()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const passport = require('passport')
const flash = require('connect-flash')
const sessions = require('express-session')


app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(flash())

require('./config/passport')(passport)


app.use(passport.initialize())
app.use(passport.session())



const questionController = require('./controllers/questions')
const usersController = require('./controllers/users')

app.use('/questions', questionController)
app.use('/users', usersController)

app.get('/', (req, res) => {
    res.redirect('/questions')
})

app.listen(4000, () => {
    console.log("app listening on port 4000")
  })
  