function SetUserName(username){
    this.username = username
}

function createUser(username, email, password){
    SetUserName.call(this, username)  // it won't call the setUserName object unless and until .call is used
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gb.com", "123")
console.log(chai)