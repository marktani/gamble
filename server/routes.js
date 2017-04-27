const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/steam',
  passport.authenticate('steam', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/');
  })

router.get('/steam/return', (req, res, next) => {
  passport.authenticate('steam', (err, token, userData) => {
    if (err) {
      if (err.name === 'InternalOpenIDError') {
        return res.status(400).json({
          success: false,
          message: err.message
        })
      }
    }

    return res.json({
      success: true,
      token,
      user: userData
    })
  })(req, res, next)
})
