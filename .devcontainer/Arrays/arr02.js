const marvel = ["ironman","Thor"]
const dc = ["superman","flash"]

//marvel.push(dc)
//console.log(marvel.concat(dc));

const arr = [1,2,[3,4,[34]]]
const newArray = arr.flat(Infinity)
console.log(newArray)

//spread operator
const newAr = [...marvel,...dc]
console.log(newAr)

console.log(Array.isArray("Aditya"));

console.log(Array.from("Aditya"))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))