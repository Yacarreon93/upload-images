'use strict'

// Import Image model
const Image = require('../models/image')

// Save image
function save(req, res) {

    console.log('Saving image from controller...')

    // Create a new image from model
    let image = new Image()
    
    // Asign requested data
    image.title = req.body.title
	image.description = req.body.description

    // Testing
    res.status(200).send(image)

}

module.exports.save = save;
	