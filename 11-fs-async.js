//get the two methods from the file system module this is using async method
const {readFile, writeFile} = require('fs')
console.log('start');
//to use asynchronous method you need to use a callback
//need to add utf encoding or result will be a buffer
readFile('./content/first.txt', 'utf-8',(err, result) => {
    if(err){
        console.log(err)
        return;
    }
    
    const first = result

    readFile('./content/second.txt', 'utf-8',(err, result) => {
        if(err){
            console.log(err)
            return;
        }
        
        const second = result

        writeFile('./content/result-async.txt', 
            `here is the result: ${first} , ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return;
                }

                console.log('done with this task')
            }
        )
    })    
})

console.log('starting next task');

//this async is using callback it's a bit messing 
//so two other ways of doing this instead is to use promises or async await