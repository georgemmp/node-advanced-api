const nodemailer = require('nodemailer')

const mailConfig = require('../config/email.config')

const transport = nodemailer.createTransport(mailConfig)

module.exports = transport
