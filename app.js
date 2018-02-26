const express = require('express')
const app = express ()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const questionController = require('./controllers/questions')
const usersController = require('./controllers/users')
const Question = require('./models/Questions')


app.use(morgan('dev'))
app.use(bodyParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(session({secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS'}))
app.use(flash())

require('./config/passport')(passport)

app.use(passport.initialize())
app.use(passport.session())


app.use(function(req, res, next) {
    res.locals.currentUser = req.user
    next()
  })

  app.get('/', (req, res) => {
    Question.find({}).sort({date: 'descending'})
          .then(questions => {
            res.render('questions/index', {questions})
          })
  })


  app.use('/questions', questionController)
  app.use('/users', usersController)


app.listen(4000, () => {
    console.log("app listening on port 4000")
  })
  