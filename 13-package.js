// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _= require('lodash')

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)
console.log("sugar");

//lets say you are downloading a project from git, it won't contain the node_modules folder cause that is huge
//instead the package.json contains reference to all the packages so when you download the project you'll just run npm install and that will look at
//the package.json file and install all the dependencies/packages required

//packages that you only want to use during development and not in production youcan install them as devDepenencies 
//and to do that for nodemon you'd type: npm i nodemon -D
//to run the scripts that you create in package.json us
//npm start & npm run dev
//rather install nodemon globally so it can be used by all your node projects: npm install -g nodemon

//to uninstall a package: npm uninstall <packageName>
//you can also just delete the package-lock.json, the node_modules and the entry in package.json then just re-run npm install