'use strict'

const express = require('express')
const router = express.Router()

// Routes:

// Display the upload image form
router.get('/image', (req, res) => {

    // Render jade template for the index view
    res.render('index')

})

// Save requested image into server
router.post('/image', (req, res) => {

    console.log(req)
    res.status(200).send('Saving image...')

})

module.exports = router