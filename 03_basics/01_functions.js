// function addTwo(num1, num2){
//    console.log( num1 + num2)
// }

function addTwo(num1, num2){
//    let result = num1+num2
//    return result

    return num1 + num2
}

//addTwo(3,4)

const result = addTwo(3,5)
// console.log(result)

function login(username){
    if(!username){
        console.log("Please enter a username")
        return //to not return anything after this
    }
    return `${username} just logged in`
}

// console.log(login("Tisha"))
// console.log(login(""))
// console.log(login())

function calculateCartPrice(val1 , val2, ...num1){//rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 200))

const user = {
    username: "Tisha",
    price : 700
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

const newArray= [2200, 400, 500, 100]

function returnsecondvalue(getArray){
    return getArray[1]
}

console.log(returnsecondvalue(newArray))
console.log(returnsecondvalue([200, 800, 500, 1000]))