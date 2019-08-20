const server = require('./server')
const ENV = require('./config/env.config')

server.listen(ENV.PORT || 3000)
