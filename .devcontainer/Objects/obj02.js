//const tinderDog = new Object()

const tinderDog = {}
tinderDog.user = "Aditya"
tinderDog.age = 22
tinderDog.email = "Adityatbgoogle.com"
//console.log(tinderDog);

const target = {1:'a',2:'b'}
const soure = {3:'c',4:'d'}

//How to combine

//console.log({obj1,obj2})

//using assign keyword

//const obj3 = Object.assign({},target,soure)

//using spread operator
const obj3 = {...target,...soure}
console.log(obj3)

console.log(tinderDog.hasOwnProperty('user'))
console.log(Object.keys(tinderDog));
console.log(Object.values(tinderDog));
console.log(Object.entries(tinderDog));//convert int array form