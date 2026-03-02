// loop for objects

const myObject = {
    js: "JavaScript",
    py: "Python",
    java: "Java"
}

//for in loop
for (const key in myObject) {
    console.log(`${key} shorcut is for ${myObject[key]}`);
}

const programmingLanguages = ["JavaScript", "Python", "Java", "C++"]

for(const key in programmingLanguages) {
    console.log(programmingLanguages[key]);
}
    
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
//maps cannot be iterated using for loop