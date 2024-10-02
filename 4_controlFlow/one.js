// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }
// // console.log(`User power: ${power}`)

const balance = 1000
// don't write if statement as below two lines
// if(balance > 500) console.log("test"),
// console.log("test 2")

// the following if, else if, else is correctly formatted
// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log(" less than 1200")
// }


// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true
// if( userLoggedIn && debitCard){
//     console.log("Allow to buy course")
// }
// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("User logged in")
// }


// const month = 3
// switch (month) {
//     case 1:
//         console.log("January")
//         break;
//     case 2:
//         console.log("February")
//         break;
//     case 3:
//         console.log("March")
//         break;    // if break wasn't used here then the entire code after case 3 including case 3 would have got executed excluding the default case
//     case 4:
//         console.log("April")
//         break;

//     default:
//         console.log("Defualt case")
//         break;
// }

const month = "march"
switch (month) {
    case "january":
        console.log("January")
        break;
    case "february":
        console.log("February")
        break;
    case "march":
        console.log("March")
        break;    // if break wasn't used here then the entire code after case 3 including case 3 would have got executed excluding the default case
    case "april":
        console.log("April")
        break;

    default:
        console.log("Defualt case")
        break;
}