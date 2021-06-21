//built in node module path
const path = require('path')

//path separator
console.log(path.sep)

const filePath = path.join('/content','subfolder', 'test.txt')
console.log(filePath)

//get last portion of file path
const base = path.basename(filePath)
console.log(base);

//returns absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);