const marvel_heroes= ["thor", "Ironman", "Spiderman"]
const dc= ["superman", "flash", "batman"]

//marvel_heroes.push(dc) //array inside array
//console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])

const allHeroes = marvel_heroes.concat(dc)
console.log(allHeroes)

//-----------spread operator-----------------
const allNew= [...marvel_heroes, ...dc]
console.log(allNew)

//-------------flat method-----------------
const arr1= [1,2,3, [4,5,6], 7, [6,7,[4,5]]] 

const realArr = arr1.flat(Infinity) // flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
// If we pass Infinity as the depth, it will flatten the array completely. 
console.log(realArr)

//-----------------Array.from, Array.isArray, Array.of-----------------
console.log(Array.isArray("Tisha"))
console.log(Array.from("Tisha")) //Array.from method creates a new, shallow-copied Array instance from an array-like or iterable object. It is used to convert a string into an array of characters. It can also be used to convert a Set or Map into an array. It can also be used to convert an arguments object into an array. It can also be used to convert a NodeList into an array. It can also be used to convert a HTMLCollection into an array. It can also be used to convert a TypedArray into an array. It can also be used to convert a Array-like object into an array. It can also be used to convert a iterable object into an array.
console.log(Array.from({name: "Tisha"})) //Array.from method creates a new, shallow-copied Array instance from an array-like or iterable object. It is used to convert a string into an array of characters. It can also be used to convert a Set or Map into an array. It can also be used to convert an arguments object into an array. It can also be used to convert a NodeList into an array. It can also be used to convert a HTMLCollection into an array. It can also be used to convert a TypedArray into an array. It can also be used to convert a Array-like object into an array. It can also be used to convert a iterable object into an array.  

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3)) //returns a new array from set of elements.