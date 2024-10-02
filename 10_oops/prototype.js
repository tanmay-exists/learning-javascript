let myName = "hitesh   "
let mychannel = "chai    "
console.log(myName.trueLength)

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower : function(){
        console.log(`Spider power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh = function(){       // injected a "hitesh" function in the root prototype itself i.e. Object
    console.log(`hitesh is present in all objects`)
}
heroPower.hitesh()
myHeros.hitesh()

Array.prototype.heyHitesh = function(){     // injected  heyHitesh function only for array objects
    console.log(`Hitesh says hello`)
}
myHeros.heyHitesh()
// heroPower.heyHiteshI()   // --> this won't have the access of heyHitesh 


// inheritance
const user = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "Js assignment",
    fulltime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user    // this is prototypical inheritance

// modern syntax of doing the __proto__ thing
Object.setPrototypeOf(TeachingSupport, Teacher)     // TeachingSupport will access all properties of Teacher


let anotherUsername = "Chaiaurcode  "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()