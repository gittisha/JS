const myArr = [0,1,2,3,4,5]
console.log(myArr[0])
//JavaScript array-copy operations create shallow copies. 
//shallow copy- properties share the same reference point (whichever changes would be made they would be reflected in both the objects)
//deep copy- vice versa, properties do not share the same reference point 

const myHeros= ["spiderman", "susan storm"]

const myArr2= new Array(1,2,3,4) //array constructor, not recommended to use it. It is better to use array literal syntax. It can lead to confusion and bugs. For example, if we use new Array(5), it will create an array of length 5 with all elements as undefined. But if we use [5], it will create an array with one element 5.
console.log(myArr[1]);


//Array methods

myArr.push(6)
console.log(myArr);
myArr.pop()


myArr.unshift(9) //adds an element at the beginning of the array
console.log(myArr);
myArr.shift() //removes the first element of the array
console.log(myArr);

console.log(myArr.includes(9)) //includes method checks if the array contains a certain element and returns true or false. It is case sensitive. It is also used to check if an array contains an object or not. It checks for reference equality in case of objects. It is not recommended to use it for checking if an array contains an object or not. It is better to use find method for that.
console.log(myArr.indexOf(3)) //indexOf method returns the index of the first occurrence of a specified value in the array, or -1 if it is not found. It is case sensitive. It is also used to check if an array contains an object or not. It checks for reference equality in case of objects. It is not recommended to use it for checking if an array contains an object or not. It is better to use find method for that.


const newArr = myArr.join()

console.log(myArr);
console.log(newArr)

//________________slice, splice_____________

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) //last range is not included and original array is not changed

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3) //last range is included 
// and original array is changed
console.log("C ", myArr)
console.log(myn2)