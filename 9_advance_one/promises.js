const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls cryptography, network
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})  // passing data into resolve
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false   // change the value to true to get the .catch function working
        if(!error){
            resolve({username: "hitesh", password: "1234"})
        }
        else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username    // this return can't be stored into a variable like const x = promiseFour.then()
}).then((username)=>{       // the user.username returned in the above then is passed into this then
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The promise is finally resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "js", password: "123"})
        }
        else{
            reject('Error: Js went wrong')
        }
    }, 1000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:", error)
//     }
// }
// getAllUsers()

// the above function can be written as below using then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))