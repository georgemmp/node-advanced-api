const express = require('express')

const routes = express.Router()
const UserController = require('./controller/UserController')
const SessionController = require('./controller/SessionController')
const authMiddleware = require('./middleware/auth')

routes.post('/api/users', UserController.store)
routes.post('/api/users/login', SessionController.store)

routes.get('/api/auth', authMiddleware, (req, res) => res.json({ ok: true }))

module.exports = routes
