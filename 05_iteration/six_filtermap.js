// const coding = ["js","ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item); //doesn't return values
//     return item; //doesn't return values
    
// })
// console.log(values); //undefined

//-------------Filter and map are used to return values
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
const newArr = myNums.filter( (num) => num>4) //filter returns a new array with the values that satisfy the condition
console.log(newArr);
const newNums = myNums.filter( (num) => { 
   return num > 4
}) //more efficient than for each loop
console.log(newNums);


// const newNums = []
// myNums.forEach((num) => {
//    if(num>4){
//       newNums.push(num)
//    }
// });

// console.log(newNums);

// let userBooks = books.filter( (bk) => bk.genre ==='History')
// userBooks = books.filter( (bk) => {
//    bk.publish >= 2000 && bk.genre === "History"
// })
// console.log(userBooks);
