const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map( (num) => num+10)
//better than for each for him


//chaining 
const newNums = myNumbers
    .map((num) => num*10 )
    .map( (num) => num+1 )
    .filter( (num) => num >= 40)
console.log(newNums)