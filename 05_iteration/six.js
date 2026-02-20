// const coding = ["js","ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(); //doesn't return values
    
// })

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// const newNums = myNums.filter( (num) => {
//    return num > 4
// }) //more efficient

// const newNums = []
// myNums.forEach((num) => {
//    if(num>4){
//       newNums.push(num)
//    }
// });

// console.log(newNums);

let userBooks = books.filter( (bk) => bk.genre ==='History')
userBooks = books.filter( (bk) => {
   bk.publish >= 2000 && bk.genre === "History"
})
console.log(userBooks);
