function multiplyBy5(num){
   return num*5 
}
multiplyBy5.power = 3
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){    // injecting a method into the object createUser
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price: ${this.score}`)
}
const chai = new createUser("chai", 25)
const tea = new createUser("chai", 250)
chai.printMe()