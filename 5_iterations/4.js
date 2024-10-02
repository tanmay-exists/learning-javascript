const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} - ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(`${key} - ${programming[key]}`)
}

// map is not iteratable as the map keys are not enumerable
// const map = new Map()
// map.set('IN', 'India')
// map.set('USA', 'United States of America')
// map.set('FR', 'France')
// map.set('IN', 'India')
// for (const key in map) {
//     console.log(key)
// }