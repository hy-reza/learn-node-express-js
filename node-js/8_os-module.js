//OS MODULE
const os = require('os')

//info about user
console.table(os.userInfo())

//info about cpus 
console.table(os.cpus())

//methor return the system uptime in seconds
console.info(`The system Uptime is ${os.uptime()} seconds`)

console.info(
    {
        name : os.type(),
        release : os.release(),
        totalMem : os.totalmem(),
        freeMem: os.freemem()
    }
)