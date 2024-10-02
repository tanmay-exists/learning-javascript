/*
Primitive: these are call by value
    string, number, boolean, null, undefined, symbol, BigInt

Non-pimitive(Reference):
    Array, Objects, Functions
 */

// defining symbol
const id = Symbol('132')
const anotherId = Symbol('132')
console.log(id==anotherId)
console.log(typeof id)

// BigInt
const bigNumber = 343434894485n
console.log(typeof bigNumber)

// arrray
const heroes = ["shaktiman", "naagraj", "doga"]
console.log(typeof heroes)

// object are inside the curly braces
let myObj = {
    name: "hitesh",
    age: 23,
}

// function
const myFunction = function(){
    console.log("Hello")
}
console.log(typeof myFunction)

let somevalue = null
console.log(typeof somevalue)



// MEMORY - STACK(primitive), HEAP(non-primitive)
let myYoutubename = "hiteshchoudharydotcom"
let anotherName = myYoutubename  // this got a copy of value of myYoutubename
console.log(anotherName)
anotherName = "chaiaurcode"
console.log(anotherName)
console.log(myYoutubename)

let userOne = {
    email: "user@gooogle.com",
    upi: "user@ylb"
}

let userTwo = userOne   // this will refer the address of userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email)
console.log(userTwo.email)