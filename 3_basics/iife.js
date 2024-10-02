// Immediately Invoked Function Expressions (IIFE): used to avoid pollution due to global scope
(function chai(){
    // function has a name hence its a named iife
    console.log(`DB connected`)
})();   // semicolon is required to end the execution of the current iife function in order to run another consecutive iife function 
// first parenthesis is function definition and second parenthesis is function call

( (name) => {
    // function has no name hence its unnamed iife
    console.log(`DB connected 2 ${name}`)
})("hitesh")