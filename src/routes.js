const express = require('express')

const routes = express.Router()
const UserController = require('./controller/user.controller')

routes.post('/api/users', UserController.store)

module.exports = routes
