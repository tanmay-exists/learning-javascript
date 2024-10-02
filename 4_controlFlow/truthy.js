const userEmail = "h@hitesh.ai"     // if an empty array was assigned here then too the if block would have got executed; but an empty string i.e. "" would not execute the if block and will execute the else block
if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

// the following are falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// note that: " "  <--- space between the double inverted commas is not an empty string hence its not falsy

// the following are surprisingly truthy values: "0", "false", 'false', " ", [], {}, function(){}

const userEmail2 = []
if(userEmail2.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){     // Object.keys(emptyObj) will return an empty array hence .length is used
    console.log("Object is empty")
}

// Nullish Coalescing Operator(??): null undefined
let val1;
// val1 = 5 ?? 10   //--> this will assign 5
// val1 = null ?? 10   //--> this will assign 10
// val1 = undefined ?? 15  //--> this will assign 15
val1 = null ?? 10 ?? 15
console.log(val1)


// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")