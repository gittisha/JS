//if
// === checks the datatypes too

const userEmail= []

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Dont have a user email")
// }

//short hand notation
const balance = 1000
// if (balance > 500) console.log("You are rich") //if there is only one statement, we can skip the curly braces

//&& operator
//|| operator <pipe sign>

// switch (key){
//     case value:
//         break;
// }

//----------------falsy values
//false, 0, -0, BigInt 0n, null, "", undefined, NaN

//----------------truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty")
// }

// false== 0; false == ''; 0== '';
// all will give output as true



// Nullish Coalescing Operator (??): null undefined
let val1;
//val1 = 5 ?? 10 //if the response is Null then it will give the second value, otherwise it will give the first value. 
// val1 = null ?? 10 //
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 
console.log(val1)

//Terniary operator
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("less than 80")