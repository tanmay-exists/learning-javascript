class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)     // this will track to this.username of superclass i.e. here User class
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`New coures was added by ${this.username}`)
    }
}

const chai = new Teacher('chai', 'chai@teacher.com', '124')
chai.addCourse()
chai.logMe()
const masalaChai = new User('masalaChai')
masalaChai.logMe()
console.log(chai === masalaChai)
console.log(chai === Teacher)
console.log(chai instanceof Teacher)
console.log(chai instanceof User)