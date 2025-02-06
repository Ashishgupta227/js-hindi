function sayMyName(){
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("S")
    console.log("H")
}

// sayMyName //- This is function reference
// sayMyName() //-- this is function execution

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
       let result = number1 + number2
       return result
       console.log("Ashish")//after return 
       // in func no line of code is working
    }

const result = addTwoNumbers(5,6)
// console.log("Result: ", result)

function loginUserMessage(username = "sam"){
    if(username === undefined){ //!username == username === undefined
        console.log("Plz enter a username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Ashish"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage("Ashish"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200,300,400,500,600))

const user = {
    username: "Ashish",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,600]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,600,1000]))