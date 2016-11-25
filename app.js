'use strict'

const express = require('express')
const app = express()

const router = require('./routes')

// Set "JADE" as template engine
app.set('view engine', 'jade')
app.use('/', router)

module.exports = app