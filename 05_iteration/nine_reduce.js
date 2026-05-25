//used for shopping cart, total price, etc.
const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 3)

//see docs on  reduce here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);
 
// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 299
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay)