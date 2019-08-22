const express = require('express')
const validate = require('express-validation')

const routes = express.Router()
const UserController = require('./controller/UserController')
const SessionController = require('./controller/SessionController')
const authMiddleware = require('./middleware/auth')
const AdController = require('./controller/AdController')
const Purchase = require('./controller/PurchaseController')
const validators = require('./validators')

routes.post('/api/users', validate(validators.UserValidator), UserController.store)
routes.post('/api/users/login', validate(validators.SessionValidator), SessionController.store)

routes.use(authMiddleware)

routes.get('/api/ads', AdController.index)
routes.get('/api/ads/:id', AdController.show)
routes.post('/api/ads', validate(validators.AdValidator), AdController.store)
routes.put('/api/ads/:id', validate(validators.AdValidator), AdController.update)
routes.delete('/api/ads/:id', AdController.destroy)

routes.put('/api/purchase', validate(validators.PurchaseValidator), Purchase.store)

module.exports = routes
