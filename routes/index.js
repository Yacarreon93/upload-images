'use strict'

const express = require('express')

const router = express.Router()

router.get('/image', (req, res) => {

    res.status(200).send('Upload image form...')

})

module.exports = router