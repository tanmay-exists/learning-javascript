let myDate = new Date()
console.log(myDate)
console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())

let mycreatedDate = new Date(2023, 0, 23)   // months start from 0 in js
console.log(`mycreatedDate: ${mycreatedDate.toDateString()}`)

let mycreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(`mycreatedDate2: ${mycreatedDate2.toLocaleString()}`)

let mycreatedDate3 = new Date("2023-01-14")
console.log(`mycreatedDate3: ${mycreatedDate3.toLocaleString()}`)

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreatedDate.getTime())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long",
})