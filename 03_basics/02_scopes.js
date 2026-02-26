
//{} it is scope
var c = 300 
let a = 300

if (true){
    let a=10
    const b= 20
    c = 30
    console.log("Inner: ",a)
}

// console.log(a) //a is not defined because it is block scope and we are trying to access it outside the block
// console.log(b) //b is not defined because it is block scope and we are trying to access it outside the block
// console.log(c)
//function scope
//global scope
//module scope
//block scope


//closure - a closure is a function that has access to its own scope, the outer function's scope, and the global scope.
//document object model- DOM (how html can be manipulated using js)


function one(){
    const username = "Tisha"

    function two(){ //its a child function
        const website= "Youtube"
        console.log(username)
    }
    //console.log(website);

    two()
}
one()

if(true){
    const username= "Tisha"
    if(username === "Tisha"){
        const website = "Youtube"
        console.log(username + website)
    }
    //console.log(website) //website is not defined because it is block scope and we are trying to access it outside the block
}
// console.log(username) //same reason as above

// +++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++
console.log(addOne(5))//addOne is a function declaration, which is hoisted to the top of its scope.
// This means that you can call addOne before its actual declaration in the code, and it will work correctly.
function addOne(num){
    return num+1
}

addTwo(5)
const addTwo = function(num){ //addTwo--- its a function but also known as function expression
    return num+2
}
