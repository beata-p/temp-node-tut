//Globals

//__dirname - path to current dir
//__filename - file name
//require - function to use modules (commonjs)
//module - info about current module (file)
//process - info about environ where process is being executed

console.log(__filename);

//setInterval and setTimeout will work in node.js
setInterval(() => {
    console.log('hello world')
}, 1000);