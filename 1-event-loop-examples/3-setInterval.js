//set intervall is async
setInterval(() => {
    console.log('hello world');
}, 2000);
//every two seconds event loop will invoke the callback
console.log('i will run first');
//process stays alive unless
//kill process ctrl + c
//unexpected error