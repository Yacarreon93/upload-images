'use strict'

const app = require('./app')
const config = require('./config.js')

app.listen(config.port, () => {

    console.log(`Server runs on http://localhost:${config.port}`)

})  