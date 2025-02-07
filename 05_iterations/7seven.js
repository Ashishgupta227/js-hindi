const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => { return num + 10} )
// console.log(newNums)

// same by foreach

// const newNums = myNumbers.forEach( (num) => {
//     num = num+10
//     console.log(num); 
// })

// chaining

const newNums = myNumbers.map( (num) => num * 10)
                .map( (num) => num+1)
                .filter( (num) => num >=40)

console.log(newNums);
