// # Primitive

// 7 types: String,Number,Boolean,
// null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId)

//const bigNumber = 3456789578578591234
//const bignumber = 3456789578578591234n
//console.log(bigNumber)
// Reference (Non-primitive)

//types;(Array,Oblects,Function)

const heros = ["shaktiman","naagraj","doga"]; //arrays
let myObj = {
    name: "hitesh",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world!")
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myfunction);
console.log(typeof heros)