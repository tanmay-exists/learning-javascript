const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log(this.username)
        console.log(this)
    }
}
console.log(user.username)
console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this     // not mandatory to write this line
}
const userOne = new User("hitesh", 23, true)    // constructor function
const userTwo = new User("ChaiaurCode", 11, false)
console.log(userOne)