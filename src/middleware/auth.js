const jwt = require('jsonwebtoken')
const ENV = require('../config/env.config')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify, )(token, ENV.SECRET)
    req.userId = decoded.id

    return next()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
