// an object will be singleton only if it forms throught a constructor
// Object.create



// symbol:
const mySym = Symbol("key1")

// object literals (not singleton):
const JsUser = {
    name: "Hitesh", 
    "full name": "Hitesh Choudhary",
    age: 18,
    // mySym: "mykey1",    // this is not a Symbol here
    [mySym]: "mykey1",  // this is a representation the symbol
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])    // there is no other way of accessing properties declared as string
// console.log(JsUser["mySym"])
// console.log(typeof JsUser["mySym"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser["email"])

JsUser.greeting = function(){
    console.log("Hello js user")
}
console.log(JsUser.greeting)
console.log(JsUser["greeting"])
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)  // the greetingTwo is already about the same object i.e. JsUser hence used this here
}
console.log(JsUser.greetingTwo())

Object.freeze(JsUser)   // this will not allow any further changes to affect JsUser
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser["email"])
console.log(JsUser)