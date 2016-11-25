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

    // Store image into database
    image.save((err, imageStored) => {

		if (err) {

			console.log(`Saving image ERROR: ${err}`)

		} else {

			res.status(200).send({ message: "The image was stored", image: imageStored })
			
		}

	})

}

module.exports.save = save;
	