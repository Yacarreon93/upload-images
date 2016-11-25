'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Image schema details
const ImageSchema = Schema({

	title: String,
	description: String,
	path: { type: String, default: './public/dummy/dummy.png' }

})

// Export Image schema as a model
module.exports = mongoose.model('Image', ImageSchema)