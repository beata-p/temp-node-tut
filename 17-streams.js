const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding:'utf-8'})

//by default read stream will return data back in chunks in the size of 64kb
//last buffer that gets returned will be the remainder so may be less than 64kb
//highWaterMark - control size
//use highWaterMark to customize the size

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err)=>{
    console.log(err);
})