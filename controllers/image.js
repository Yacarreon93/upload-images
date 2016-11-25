'use strict'

const Image = require('../models/image')

function save(req, res) {

    console.log(req)
    res.status(200).send('Saving image from controller...')

}

module.exports.save = save;
