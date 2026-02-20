//singleton- objects made from constructors
//Object.create can be used to create a new object.


//--------------objects literals-------------------
const mySym = Symbol("key1")

const JsUser= {
    name: "Tisha",
    "full name": "Tisha Banerjee", //string cannot not be accessed as JsUser.full name.
    age: 18,
    [mySym]: "mykey1", //symbol declaration in objects
    location: "Barasat",
    email: "tisha@microsoft.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//accessing values from objects
console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser[email]) //this wont work as email is not defined as a variable, it will look for a variable named email and not the key email in the object
console.log(JsUser["full name"]);
console.log(JsUser[mySym])


//-------------------modifying objects-------------------
JsUser.email= "tisha@google.com"
// Object.freeze(JsUser) //value doesnt change afterwards
// JsUser.email= "tisha@tint.com"
console.log(JsUser)

//-------------------adding methods to objects-------------------
JsUser.greeting= function(){
    console.log("Hello JsUser")
}

JsUser.greetingTwo= function(){
    console.log(`Hello JsUser, ${this.name}`); //`` it is called string interpolation, it allows us to embed expressions inside string literals. ${} is used to evaluate the expression inside it and return the result as a string.
}

// console.log(JsUser.greeting) //this will print the function definition
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())