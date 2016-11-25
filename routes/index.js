'use strict'

const express = require('express')
const router = express.Router()

// Routes:

// Display the upload image form
router.get('/image', (req, res) => {

    // Render jade template for the index view
    res.render('index')

})

module.exports = router