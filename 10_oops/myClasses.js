class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai', 'chai@gmail.com', '123')
console.log(chai.encryptPassword())
console.log(chai.changeUsername())




// behind the scene of the above code
function Userr(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
Userr.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Userr.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new Userr('tea', 'tea@gmail.com', '234')
console.log(tea.encryptPassword())
console.log(tea.changeUsername())