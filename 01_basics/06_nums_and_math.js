const score = 400
console.log(score)

const balance = new Number(100) //primitive value is wrapped in an object, we can use methods on it. But it is not recommended to use Number constructor to create numbers. It is better to use primitive values.
console.log(balance)

console.log(balance.toString().length); 
console.log(balance.toFixed(3)) 

const otherNumber= 123.8966

console.log(otherNumber.toPrecision(4)) //rounds the number to 4 significant digits

const hundreds= 10000000
console.log(hundreds.toLocaleString('en-IN')) //1,00,00,000

console.log(Number.EPSILON) //

//++++++++++++++++++++++++Math+++++++++++++++++++++++

console.log(Math) //use it in browser console to see all the methods and properties of Math object
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4, 3, 6, 8))

console.log(Math.floor(Math.random()*10) + 1)// multiplying 10 shifts value from 0-9 to 0-10 and adding 1 shifts it to 1-10. 
// So we get a random number between 1 and 10. We can change the range by changing the multiplier and the addition value. 
// For example, if we want a random number between 5 and 15, we can use Math.floor(Math.random()*11) + 5. 
// This will give us a random number between 5 and 15 (inclusive).

const min= 10
const max = 20

console.log(Math.floor((Math.random() * (max-min +1)+ min))) 
// this will give us a random number between min and max (inclusive). We can change the range by changing the values of min and max.