const name= "Tisha"
const repoCount = 50

console.log(name + repoCount + "Value") //dont use it

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ryozet-Gaming') //string is object here, not array
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.substring(-8,3) //doesn't work
console.log(anotherString)

const newStringOne = "       Tisha   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://tisha.com/tisha%20banerjee"

console.log(url.replace('%20', '-'))
console.log(url.includes('javascript '))

console.log(gameName.split('-'))