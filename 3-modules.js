//every file in node is a module
//to access the exports module we do this:
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./5-alternative-flavor')

//if you require this it will be invoked immediately cause it's being invoked in that file
require('./7-mind-grenade')

//console.log(names);
// console.log(data)
//  sayHi('susan');
//  sayHi(names.john);
//  sayHi(names.peter);

//node has built in modules:
//- os
//- path 
//- fs 
//- http 
