'use strict'

// Import Image model
const Image = require('../models/image')

// List images
function getAll(req, res) {

    // Find all images on database
    Image.find({}, (err, images) => {

		if(err) return res.status(500).send({ message: `Listing images ERROR => ${err}` })

        // Send images to view
		res.render('index', {images})

	})
}

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

            res.redirect('/image')
			
		}

	})

}

// Export methods
module.exports = {
    getAll,
    save    
};
	