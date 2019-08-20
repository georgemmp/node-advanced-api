const express = require('express')

const routes = express.Router()
const UserController = require('./controller/UserController')
const SessionController = require('./controller/SessionController')

routes.post('/api/users', UserController.store)
routes.post('/api/users/login', SessionController.store)

module.exports = routes
