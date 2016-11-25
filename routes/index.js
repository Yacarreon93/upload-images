'use strict'

const express = require('express')
const router = express.Router()

// Import controller
const ImageController = require('../controllers/image')

// Routes:

// Display the upload image form
router.get('/image', ImageController.getAll)

// Save requested image into server
router.post('/image', ImageController.save)

// Display the upload image form
router.get('/image/:imageId', ImageController.get)

module.exports = router