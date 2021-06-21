//this is one way to make code cleaner than what we did in 11-fs-async.js

const {readFile, writeFile} = require('fs').promises
//the below three lines are the same thing as just adding .promises above 
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try {
        // const first = await getText('./content/first.txt')
        // const second = await getText('./content/second.txt')
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME 3 : ${first} ${second}`, {flag: 'a'}
        )
        console.log(first, second);
    
    } catch (error) {
        console.log(error);
    }
}

start()



// const getText = (path) => {

//     return new Promise((resolve, reject)=>{

//         readFile(path, 'utf-8', (err, data)=>{

//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }        
//         })
//     })
// }

// getText('./content/first.txt')
//     .then((result)=>console.log(result))
//     .catch((err) => console.log(err))

