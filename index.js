'use strict'

const app = require('./app')
const mongoose = require('mongoose')
const config = require('./config.js')

// Connection to monogoDB can be setup from config.js
mongoose.connect(config.DB, (err, res) => {

    if (err) {
        return console.log('ERROR: Unable to connect to database >', err)        
    }

    console.log('Connected to database successfully')

    // Web server can be setup from config.js
    app.listen(config.PORT, () => {

        console.log(`Server runs on http://localhost:${config.PORT}`)

    })  

})