//get the two methods from the file system module this is using sync approach
const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log(first,second);

//create a new file, if it does not exist node will just create it
//if there already is a file and it contains any content then it will be overritten
//if you want to rather append then add the third property flag {a}
writeFileSync('./content/third.txt', 
`here is the result: ${first} , ${second}`,
{flag: 'a'}
)

console.log('done with this task');
console.log('starting the next task');