require('dotenv').config()

const ENV = {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URI: process.env.DATABASE_URI,
  SECRET: process.env.SECRET,
  TTL: process.env.TTL,
  PORT: process.env.PORT
}

module.exports = ENV
