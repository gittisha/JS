//break, continue, for 
// while

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

//for of

//Maps
const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('UK', "United Kingdom")

console.log(map);

//deconstructuring of map    
for (const [key, value] of map) {
    console.log(key);
}

const myObject = {
    game1: "Valorant",
    game2: "CSGO",
    game3: "Apex Legends"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':- ', value);
// } //TypeError: myObject is not iterable