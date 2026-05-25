//for each loop is mostly used for arrays and objects

const coding = ["js", "ruby", "java", "python", "cpp"]
//see the prototypes on inspect

// coding.forEach( function (val){ //callback function-- function passed as an argument to another function
//     console.log(val);
// } )

// coding.forEach( (item) => { //using arrow function
//     console.log(item);
// } )


//-------------------------
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) //calling the function as reference

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//for each loop for objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )