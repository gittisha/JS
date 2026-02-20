//dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myCreatedDate = new Date(2025, 1, 23)
// let myCreatedDate = new Date(2025, 1, 23, 5, 3)
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp= Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime()); //takes time value as in biig projects
console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)

newDate.toLocaleDateString('default', {
    weekday: "long"
    
})
