// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop i: ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop j: ${j} and inner loop i: ${i}`)
//     }
// }

// let myarray = ["flash", "batman", "superman"]
// console.log(myarray.length)
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
// }


// // break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("Detected 5")
//         break
//     }
//     console.log(`Value of index is: ${index}`)
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5")
        continue
    }
    console.log(`Value of index is: ${index}`)
}
