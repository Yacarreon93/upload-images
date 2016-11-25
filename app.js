'use strict'

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
// Parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// Parse application/json 
app.use(bodyParser.json())

const router = require('./routes')
// Route from root directory
app.use('/', router)

// Set "jade" as template engine
app.set('view engine', 'jade')

module.exports = app