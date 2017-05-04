const express = require('express')
const next = require('next')
const passport = require('passport')
const sessions = require('client-sessions')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(sessions({
    cookieNmae: 'arena',
    secret: 'somefuckingsecretidk+1238916',
    duration: 7 * 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5
  }))

  server.use(passport.initialize())
  passport.use(require('./server/steam'))

  const authRoutes = require('./server/routes')
  server.use('/auth', authRoutes)

  server.get('/u/:id', (req, res) => {
    const actualPage = '/user'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/getcookie', (req, res) => {
    res.json(req.session_state)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
