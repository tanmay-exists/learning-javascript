const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map also return automatically
const newNums = myNumbers.map( (num) => num+10)
console.log(newNums)

const newNums2 = myNumbers
                 .map( (num) => num*10)
                 .map( (num) => num+1)
console.log(newNums2)

const newNums3 = myNumbers
                 .map( (num) => num*10)
                 .map( (num) => num+1)
                 .filter( (num) => num>=40)
console.log(newNums3)