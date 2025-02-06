const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
    
}

// user.welcomeMessage()
// user.username= "Ashish"
// user.welcomeMessage()

//console.log(this)

// function chai(){
//     let username = "Ashish"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = "Ashish"
//     console.log(this.username)
// }

// const chai = () =>{ 
//     let username = "Ashish"
//     console.log(this)
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1, num2) => { //arrow function
//     return num1 + num2
// }

//   Implicit return mann lena return not need
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Ashish"})

console.log(addTwo(3,4))

//const myArray = [2,5,3,7,8]
//myArray.forEach()