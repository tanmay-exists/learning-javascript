// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary",
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)    // if {} ain't given then all the values will go into object 1. But this is used rarely
const obj3 = {...obj1, ...obj2, ...obj4}    // this is used mostly for assign
console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    }
]

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged '))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor can also be written as below
const{courseInstructor: instructor} = course    // destructuring
console.log(instructor)