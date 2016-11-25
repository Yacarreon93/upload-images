'use strict'

const fs = require('fs')

// Import Image model
const Image = require('../models/image')

// Get single image
function get(req, res) {

    let imageId = req.params.imageId

	Image.findById(imageId, (err, image) => {

		if (err) return res.status(500).send({ message: `Saving image ERROR => ${err}` })

		if (!image) return res.status(404).send({ message: `The image doesn't exist` })

		let img = fs.readFileSync(`${image.path}`);
     	res.writeHead(200, {'Content-Type': 'image/gif' });
     	res.end(img, 'binary');

	})

}

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
    get,
    getAll,
    save    
};
	