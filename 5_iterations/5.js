const coding = ["js", "ruby", "java", "python", "cpp"]

console.log("First output:")
coding.forEach( function(item){
    console.log(item)
})

console.log("Second output:")
coding.forEach( (item) => {
    console.log(item)
})

console.log("Third output:")
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {       // here item refers to the object in the array
    console.log(item.languageName)
})