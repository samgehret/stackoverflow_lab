var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var passport = require('passport')

// GET /login
router.get('/login', (req, res) => {
  res.render('users/login')
})

// GET /signup
router.get('/signup', (req, res) => {
  res.render('users/signup')
})

module.exports = router
