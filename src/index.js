const server = require('./server')
const ENV = require('./config/env.config')

server.listen(process.env.PORT || 3000)
