const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const cookie = require('js-cookie')

router.get('/steam',
  passport.authenticate('steam', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/');
  })

router.get('/steam/return', (req, res, next) => {
  passport.authenticate('steam', (err, token, userData) => {
    if (err && err.name === 'InternalOpenIDError') {
      return res.status(400).json({
        success: false,
        message: err.message
      })
    }

    cookie.set('jwt', userData.token)
    /* Where do I even set the cookie? I assume I have to use a cookie middlware? *confused* */

    return res.json({
      success: true,
      token,
      user: userData
    })
  })(req, res, next)
})

module.exports = router;