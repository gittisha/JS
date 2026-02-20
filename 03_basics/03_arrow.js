const user = {
    username: "Shreedeep",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`)
        console.log(this)
    }

}

user.welcomeMessage()
user.username = "Swarnadeep"

user.welcomeMessage()
//browser is a window object
//node js is a global object
function cha(){
    //console.log(this)
}

cha()