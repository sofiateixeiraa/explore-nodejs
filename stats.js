const os = require ('os') //import module
const log1 = require ('./logger')

//show free memory, memory total and free %

const {freemem, totalmem} = os

setInterval(()=> {
    const total = parseInt(totalmem()/1024/1024)
    const mem = parseInt(freemem()/1024/1024)
    const percents = parseInt((mem/total)*100)
    
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents} %`
    }

    console.clear()
    console.log("=== PC STATS ===")
    console.table(stats)
    
    log1(`${JSON.stringify(stats)}\n`)

}, 1000)
