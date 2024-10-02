class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){     // getter likha hai toh setter bhi likhna padta hai
        return `${this._password.toUpperCase()}hitesh`
    }
    set password(value){
        this._password = value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}
const hitesh = new User("hitesh@ai", "abc")
console.log(hitesh.password)
console.log(hitesh.email)