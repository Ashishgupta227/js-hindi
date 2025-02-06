//var c =300
let a = 300
if (true){
    let a = 10
    const b = 20
   // var c = 30 // equal c = 30 same prbl occur
   //console.log("Inner:",a)
}


//console.log(a) // err
//console.log(b) // err
// console.log(c) // 30

function one() {
    const username = "Ashish"

    function two(){
        const websiste = "youtube"
        console.log(username);
    }
    //console.log(websiste)
    two()
}
//one()

if(true){
    const username = "Ashish"
    if(username === "Ashish"){
        const website = " youtube"
        //console.log(username + website)
    }
    //console.log(website)//err
}
//console.log(username) //err


// +++++++ Interesting ++++++++


// addone(5)
console.log(addone(5))

function addone(num){
    return num + 1
}

//addone(5)
//console.log(addone(5))

// addTwo(5) //err
const addTwo = function(num){
    return num + 2

}
addTwo(5)