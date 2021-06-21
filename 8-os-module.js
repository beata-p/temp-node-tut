//built in node module os
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);

//method returns system up time in seconds
console.log(`system up time: ${os.uptime} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);