//const tinder= new Object() //singleton object

const tinderUser ={} //not singleton object //const used for declaration
tinderUser.id="123abc"
tinderUser.name= "Sammy"
tinderUser.isLoggedIn= false
console.log(tinderUser);

//Nested objects
const regularUser= {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tisha",
            lastname: "Banerjee"
        }
    }
}
 
console.log(regularUser.fullname.userfullname.firstname);
//the optional chaining operator (?.) is used to safely access nested properties  
//of an object without having to manually check if each level exists.

//To combine object
const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "b", 4:"d"} 

//const obj3 = {obj1, obj2} //This will create an object with two properties obj1 and obj2, which are the original objects.
//const obj3 = Object.assign({}, obj1, obj2) //Object.assign(target, ...sources)
 //Use an empty object {} as the first argument to avoid modifying the originals.

//Object.assign() is used to copy the values of all enumerable own properties
//from one or more source objects to a target object.
//It modifies and returns the target object.



//-------------Spread operator (most used)
const obj3 = {...obj1,...obj2}
console.log(obj3)


//----------------To fetch value from database
const users=[
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //Object.keys() method returns keys
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //is the property is present in the object 



//----------------Destructuring of objects
const course={
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor} = course
// console.log(courseInstructor)

const {courseInstructor : inst} = course
console.log(inst);

//Destructuring in function parameter in react
const navbar = ({company}) => {
    //{} means destructuring
}

//API
//-------------json... object has name but json does not have name, json is a string
//     "name" : "Tisha",
//     "coursename" : "Js",
//     "price" : "free"
// }

//APIs can be found in array format as well
[
    {},
    {},
    {}
]


//randomuserapi
//json formatter -> used to convert json string into object and vice versa (like xml)