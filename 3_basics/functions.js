function sayMyName(){
    console.log('h')
    console.log('i')
    console.log('t')
    console.log('e')
    console.log('s')
    console.log('h')
}
sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }
// if this function was used then console.log(`Result: ${}`) would have given answer as undefined as the function above is just printing the sum on calling it and not returning anything

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1+number2
}
const result = addTwoNumbers(3,5)
console.log(`Result: ${result}`)

function loginUserMessage(username){    // default argument can be passed here as username = "sam"
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage(""))
console.log(loginUserMessage("hitesh"))

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 500))

function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200, 300, 500, 400, 2000))  // val1=200, val2=300 and remaining=num1

const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
/*
 in handleObject(user), directly an object can be passed as below
 handleObject({
    username: "sam", 
    price: 199
 })
*/

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(myNewArray))  // array can be directly passed here as argument