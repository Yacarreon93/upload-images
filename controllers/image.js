'use strict'

const fs = require('fs')
const path = require('path')
const uuid = require('node-uuid')

// Import Image model
const Image = require('../models/image')

// Get single image
function get(req, res) {

    let imageId = req.params.imageId

	Image.findById(imageId, (err, image) => {

		if (err) return res.status(500).send({ message: `Saving image ERROR => ${err}` })

		if (!image) return res.status(404).send({ message: `The image doesn't exist` })

        // Read file from local server
        // Improve: It should be into an Image method to avoid dependency
		let img = fs.readFileSync(`${image.path}`)
     	res.writeHead(200, {'Content-Type': 'image/gif' })
     	res.end(img, 'binary')

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
// It has a hard dependency about where to locate the images
function save(req, res) {

    console.log('Saving image from controller...')

    // Create a new image from model
    let image = new Image()
    
    // Asign requested data
    image.title = req.body.title
	image.description = req.body.description

    // Save image in server if exists
    if (req.file) {
        
        let fileExt = path.extname(req.file.originalname).toLowerCase()   

        // Only are allowed .png and .jpg files
        if (fileExt === '.png' || fileExt === '.jpg') {

            let filename = uuid.v4()
            let tempPath = req.file.path
            let targetPath = path.resolve(`./public/imgs/${filename}${fileExt}`)

            // Save image in the filesystem
            fs.rename(tempPath, targetPath, function(err) {

                if (err) throw err

                image.path = targetPath

                // If everything is correct, store image into database
                image.save((err, imageStored) => {

                    if (err) {

                        console.log(`Saving image ERROR: ${err}`)

                    } else {

                        // Redirect and show the new image into a list
                        res.redirect('/image')
                        
                    }

                })

            })

        } else {

            fs.unlink(tempPath, function () {

                if (err) throw err

                console.error('Only .png or .jpg files are allowed!')

            })

        }

    } else {

        // If has no image the model will asign a dummy image 

        // Store image into database
        image.save((err, imageStored) => {

            if (err) {

                console.log(`Saving image ERROR: ${err}`)

            } else {

                // Redirect and show the new image into a list
                res.redirect('/image')
                
            }

        })

    }          

}

// Export methods
module.exports = {
    get,
    getAll,
    save    
}
	