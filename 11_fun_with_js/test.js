const myArr = []
// %DebugPrint(myArr)   // this statement can't be run on normal v8 engine, v8-debug is required

// two types of array in js:  a) continuous/packed    b)holey

// types of continuous and holey array:
// SMI (small integer)
// Packed element
// Double(float, string, function)

const arrTwo = [1,2,3,4,5]  // this is a PACKED_SMI_ELEMENTS array
arrTwo.push(6.0)    // arrTwo is now a PACKED_DOUBLE_ELEMENTS array     // once it gets downgrade from smi to double it won't be upgraded back even after deleting the double, here 6.0
arrTwo.push('7')    // arrTwo is now a PACKED_ELEMENTS arrayo
arrTwo[10] = 11     // inserted 11 into 10th place hence its now a HOLEY_ELEMENTS array as there is gap between index 6 and 10

console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9])
console.log(arrTwo[19])

// holey array are expensive as lot of property checks are required to find it eg console.log(arrTwo[9])
// Optimised:  SMI > DOUBLE > PACKED
// Optimised:  H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)    // just 3 holes  // HOLEY_SMI_ELEMENTS
arrFour[0] = '1'    // got downgraded to HOLEY_ELEMENTS
arrFour[1] = '2'    // got downgraded to HOLEY_ELEMENTS
arrFour[2] = '3'    // got downgraded to HOLEY_ELEMENTS

const arrFive = []  // this is SMI i.e. most optimised version hence its more optimised than arrFour
arrFive.push('1')   // got downgraded to PACKED_ELEMENTS which is more optimal than HOLEY_ELEMENTS in the above case of arrFour