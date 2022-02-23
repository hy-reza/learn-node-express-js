/* GLOBALS - NOT WINDOW */

/*
    _dirname  -> path current directory 
    _filename -> file name
    require   -> function to use modules (CommonJS)
    module    -> info about current module (file)
    process   -> info about evv where the program is being executer 
*/

console.info(__dirname) //F:\Learning Project\learn-MERN-fcc\node-js
console.info(__filename) // F:\Learning Project\learn-MERN-fcc\node-js\globals.js
console.info(process) //Object process
console.info(module) //Object module

setInterval(()=>{
    const date = new Date
    console.log(date.getSeconds())
}, 1000) // globall function that return current second in time every 1000ms

setTimeout(()=>{
    console("You i'll see me in 5 second")
}, 5000) // another global function 


//see another globals at https://nodejs.org/api/globals.html 