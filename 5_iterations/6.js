// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })
// console.log(values)
// // forEach loop doesn't return anything

// filter rerturns values
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num>4)
const newNums2 = myNums.filter( (num) => {
    return num>4        // writing return is mandatory once the {} scope is used
})
console.log(newNums)
console.log(newNums2)

const newNums3 = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums3.push(num)
    }
})
console.log(newNums3)


const books = [
    {
        title: "Book one",
        genre: "Fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book two",
        genre: "Science",
        publish: 1985,
        edition: 2021
    },
    {
        title: "Book three",
        genre: "Fiction",
        publish: 1923,
        edition: 1934
    }
]

let userBooks = books.filter( (bk) => bk.genre === "Fiction")
console.log(userBooks)
userBooks = books.filter( (bk) => {
    return bk.publish >= 1981 && bk.genre === "Fiction"
})
console.log(userBooks)