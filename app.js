'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')

const app = express()

app.use('/', router)

// Set "JADE" as template engine
app.set('view engine', 'jade')

// Parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// Parse application/json 
app.use(bodyParser.json())

module.exports = app