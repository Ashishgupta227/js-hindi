const score = 400
//console.log(score)

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2))

const otherNumber = 127.6345
// console.log(otherNumber.toPrecision(3))
// console.log(otherNumber.toPrecision(4))

const hundreds = 1000000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++ MATHS +++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.2))
// console.log(Math.ceil(4.2)) //5
// console.log(Math.floor(4.9)) //4
// console.log(Math.min(4,5,2,3))
// console.log(Math.max(4,5,8,1))

console.log(Math.random())//allways 0-1
console.log(Math.random()*10)
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
