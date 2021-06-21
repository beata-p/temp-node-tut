//share only locally:
const secret = 'super secret'
//share with rest of application
const john = 'john'
const peter = 'peter'

console.log(module);

//where we add john and peter to the exports of the module 
//this will allow us to access john,peter from other files in the application
//here we have multiple values so we add them in an object
module.exports = {john, peter}