"use strict"; //treat all JS code as newer version of JS
// automatically the strict mode runs no need to type it

//alert( 3+3) // we are using nodejs not browser. //run this in browser

// ; are avoided in JS but we can use it to avoid errors in some cases. It is a good practice to use it
// console.log(3+3); console.log("Tisha") //bad code readability
// ecma script(standards for js) is JS documentation => tcs39.es

let name= "Tisha"
let age = 18
let isLoggedIn= false

// number => 2 to power 53 //range of number
// bigint 
// string => ""
//boolean
//null => standalone value
// undefined => 
// symbol => uniqueness
console.log(typeof age)

//object
console.log(typeof undefined); //undefined
console.log(typeof null); //object

//Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id= Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId)

//Reference (Non primitive)
//Array, Objects, Functions

const heroes= ["spidrman", "Superman", "Batman"]
let myObj= {
    name: "Tisha",
    age: 22,
}

const myfunction= function(){
    console.log("Hello World");
}

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */


//+++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non-primitive)  

let myGamingname = "Ryozet"
let anotherGamingname = myGamingname
anotherGamingname = "Babyshark"

console.log(myGamingname) //Ryozet
console.log(anotherGamingname) //Babyshark

let user = {
    email: "tisha@gmail.com",
    upi: "tisha@ybl",
}

let user2 = user
user2.email = "tisha2@google.com"

console.log(user.email) //tisha2@google.com
console.log(user2.email) //tisha2@google.com

//if we keep something in stack, it is stored as a value. 
// If we keep something in heap, it is stored as a reference. 
// When we copy a primitive datatype, it is copied by value. 
// When we copy a non-primitive datatype, it is copied by reference. 
// That is why when we change the value of user2, it changes the value of user as well because both user and user2 are pointing to the same object in heap.
