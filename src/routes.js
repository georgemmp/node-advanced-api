const express = require('express')

const routes = express.Router()
const UserController = require('./controller/UserController')
const SessionController = require('./controller/SessionController')
const authMiddleware = require('./middleware/auth')
const AdController = require('./controller/AdController')
const Purchase = require('./controller/PurchaseController')

routes.post('/api/users', UserController.store)
routes.post('/api/users/login', SessionController.store)

routes.use(authMiddleware)

routes.get('/api/ads', AdController.index)
routes.get('/api/ads/:id', AdController.show)
routes.post('/api/ads', AdController.store)
routes.put('/api/ads/:id', AdController.update)
routes.delete('/api/ads/:id', AdController.destroy)

routes.put('/api/purchase', Purchase.store)

module.exports = routes
