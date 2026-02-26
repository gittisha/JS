const user = {
    username: "Anushka",
    price: 99,

    welcomeMessage: function(){
        console.log(`${user.username} , welcome to the website`) //when referring to the current object we use this keyword, it refers to the current object
        console.log(this)
    }

}
//class constructor
//function constructor

user.welcomeMessage()
user.username = "Swarnadeep"
user.welcomeMessage()

// console.log(this); //This will return empty object here in nodejs
//but if ran in browser it'd return window object

//browser is a window object
//node js is a global object


// function cha(){
//     let username = "Tisha"
//     console.log(this.username) //undefined because this is not referring to any object here, it is referring to the global object which does not have username property
// }


// const cha = function(){
    //     let username = "Tisha"
    //     console.log(this.username) //undefined because this is not referring to any object here, it is referring to the global object which does not have username property
    // }
    
    const cha = () => {  //arrow function
        let username = "Tisha"
        console.log(this.username) 
}
cha()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
const addTwo = (num1, num2) => num1 + num2 //implicit return-> when we have only one line of code in the function body, we can omit the curly braces and the return keyword. The expression will be evaluated and returned automatically.

console.log(addTwo(3, 5))