var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var passport = require('passport')

// GET /login
router.get('/login', (req, res) => {
  res.render('users/login', { message: req.flash('loginMessage') })
})

// GET /signup
router.get('/signup', (req, res) => {
  res.render('users/signup', { message: req.flash('signupMessage') })
})
// POST Signup
router.post('/signup', (req, res) => {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/users/signup',
    failureFlash: true
  })
  return signupStrategy(req, res)
})

// POST /login
router.post('/login', (req, res) => {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })
  return loginProperty(req, res)
})

// GET /logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
