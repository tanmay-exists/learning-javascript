const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval){
    return acc+currval
}, 3)       // initial value of acc(accumulator)=3
console.log(myTotal)
// the below code is same as the above
const mytotal = myNums.reduce( (acc, currval) => acc+currval, 2)
console.log(mytotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "web course",
        price: 2999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay)