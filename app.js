const express = require('express')
const app = express ()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const passport = require('passport')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const usersController = require('./controllers/users')

const questionController = require('./controllers/questions')
app.use(bodyParser.urlencoded({extended: true}))

// require('./config/passport')(passport)

app.use(morgan('dev'))
app.use(cookieParser())

app.set('view engine', 'hbs')
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use(methodOverride('_method'))
app.use('/questions', questionController)
app.use('/', usersController)

app.get('/', (req, res) => {
    res.redirect('/questions')
})

app.use(function(req, res, next) {
    res.locals.currentUser = req.user
    next()
  })
  

app.listen(4000, () => {
    console.log("app listening on port 4000")
  })
  