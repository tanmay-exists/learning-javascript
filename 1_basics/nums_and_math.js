const score = 400
const balance = new Number(100)
console.log(score)
console.log(balance)
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))

const otherNumberr = 123.8966
console.log(otherNumberr.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString())


// maths
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.9))
console.log(Math.min(5,3,6,8))
console.log(Math.max(5,3,6,8))

console.log(Math.random())  // this gives number between 0 and 1 only
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min)