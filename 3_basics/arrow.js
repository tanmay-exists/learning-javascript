const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this)


// function chai(){
//     console.log(this.username)  // --> undefined
//     console.log(this)
// }
// chai()

// same output as above function
// const chai = function(){
//     console.log(this)
// }
// chai()


// Arrow function
console.log("Arrow function:")
const chai = () => {
    let username = "hitesh"
    console.log(this.username)
    console.log(this)
}
chai()


// basic arrow function:
// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// arrow function with implicit return
// const addTwo = (num1, num2) => (num1+num2)   // below line is the same as this line, the keyword "return" is used if curly braces are used
const addTwo = (num1, num2) => num1+num2
console.log(addTwo(3, 4))

const nameee = () => ({username: "hitesh"})     // () paranthesis is necessary to return object 
console.log(nameee())