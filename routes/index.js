'use strict'

const express = require('express')
const router = express.Router()

// Import controller
const ImageController = require('../controllers/image')

// Routes:

// Display the upload image form
router.get('/image', (req, res) => {

    // Render jade template for the index view
    res.render('index')

})

// Save requested image into server
router.post('/image', ImageController.save)

module.exports = router