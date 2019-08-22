const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()
const UserController = require('./controller/UserController')
const SessionController = require('./controller/SessionController')
const authMiddleware = require('./middleware/auth')
const AdController = require('./controller/AdController')
const Purchase = require('./controller/PurchaseController')
const validators = require('./validators')

routes.post('/api/users', validate(validators.UserValidator), handle(UserController.store))
routes.post('/api/users/login', validate(validators.SessionValidator), handle(SessionController.store))

routes.use(authMiddleware)

routes.get('/api/ads', handle(AdController.index))
routes.get('/api/ads/:id', handle(AdController.show))
routes.post('/api/ads', validate(validators.AdValidator), handle(AdController.store))
routes.put('/api/ads/:id', validate(validators.AdValidator), handle(AdController.update))
routes.delete('/api/ads/:id', handle(AdController.destroy))

routes.put('/api/purchase', validate(validators.PurchaseValidator), handle(Purchase.store))

module.exports = routes
