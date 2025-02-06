//  singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ashish",
    "full name": "Ashish Gupta",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// //console.log(JsUser.full name) // error
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)
// console.log(JsUser[mySym])

JsUser.email = "ashish@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email ="Ashish@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting)

console.log(JsUser.greetingTwo())