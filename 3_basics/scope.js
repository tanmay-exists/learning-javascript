// var c = 300
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// // console.log(a)
// // console.log(b)
// // the above two console.log will show a and b as not defined giving an error but the below console.log will give the output as 30 which is why var is not used
// console.log(c)

// let a = 300
// if(true){
//     let a = 10
//     const b = 20
// }
// console.log(a)

// global scope in js is different in a code environment and in the inspect->console in browser

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)     // this will give error
    two()
}
one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username+website)
    }
    // console.log(website)     // this will give error
}


// imp
console.log(addOne(5))  // addOne function is defined after the call but still its working
function addOne(num){
    return num+1
}

const addTwo = function(num){
    return num+2
}
addTwo(5)   // if addTwo was called before the definition like the addOne then it will give error because addTwo is also a variable here along with the function name