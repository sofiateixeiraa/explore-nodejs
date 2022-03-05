const EventEmitter = require('events')
const fs = require('fs') //work with files
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    console.log(message)
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
        if (err) throw err
    } )
})

//emitter.emit('log', "message needed") 

function log(message){
    emitter.emit('log', message)
}

module.exports = log