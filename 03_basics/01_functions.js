// function addTwo(num1, num2){
//    console.log( num1 + num2)
// }
//addTwo(3,4) //refernce //itd returns undefined because we are not returning anything from the function


function addTwoNumbers(num1, num2){
//    let result = num1+num2
//    return result
    return num1 + num2
}

addTwoNumbers(3,5) //8
const result = addTwoNumbers(3,5)


function loginUserMessage(username){ //function loginUserMessage(username = "Guest") to set default value
    if(!username){ //to check undefined, null, empty string
        console.log("Please enter a username")
        return //to not return anything after this
    }
    return `${username} just logged in` //
}
console.log(loginUserMessage("Tisha"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage()) //undefined


//-----------------Rest operator
function calculateCartPrice(...num1){//when we don't know how many arguments will be passed to the function, we can use rest operator to collect all the remaining arguments into an array.
    return num1
}

function calculateCartPrice(val1, val2, ...num1){//when we don't know how many arguments will be passed to the function, we can use rest operator to collect all the remaining arguments into an array.
    return num1 //it will return an array [500, 200]
}
console.log(calculateCartPrice(200, 400, 500, 200))

//object handling in function 
const user = {
    username: "Tisha",
    price : 700
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    username: "Tisha",
    price : 700
})

//array handling in function
const newArray= [2200, 400, 500, 100]
function returnsecondvalue(getArray){
    return getArray[1]
}

console.log(returnsecondvalue(newArray))
console.log(returnsecondvalue([200, 800, 500, 1000]))