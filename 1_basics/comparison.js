console.log(2>=1)
console.log("2">1)
console.log("02">1)

console.log(null>0)
console.log(null==0)
console.log(null>=0) // this gives output as true coz comparison i.e. > or < operators converted the null into a number whereas the equality i.e. == didn't convert it into a number therefore null==0 gives false
// comparison and equality is different shit in js

console.log("2"==2)
console.log("2"===2)