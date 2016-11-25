'use strict'

const app = require('./app')
const mongoose = require('mongoose')
const config = require('./config.js')

console.log(config.DB)

mongoose.connect(config.DB, (err, res) => {

    if (err) {
        return console.log('ERROR: Unable to connect to database >', err)        
    }

    console.log('Connected to database successfully')

    app.listen(config.PORT, () => {

        console.log(`Server runs on http://localhost:${config.PORT}`)

    })  

})