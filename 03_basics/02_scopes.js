
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


//closure
//document object model- DOM

function one(){
    const username = "Tisha"

    function two(){ //its a child function
        const website= "Youtube"
        console.log(username)
    }
    //console.log(website);

    //two()
}
one()

if(true){
    const username= "Tisha"
    if(username === "Tisha"){
        const website = "Youtube"
        console.log(username + website)
    }
    //console.log(website)
}
// console.log(username)

// +++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++
console.log(addOne(5))

function addOne(num){
    return num+1
}

addTwo(5)
const addTwo = function(num){ //its a function but also known as expression
    return num+2
}