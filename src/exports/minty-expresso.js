const mintyExpresso = require('minty-expresso')
const path = require('path')

let address = path.join(__dirname, '../')

mintyExpresso.newAddress('/', address + '/static/index.html')
mintyExpresso.newPort(3000, 'running!')