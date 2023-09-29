const myarr = [1,2,4,"Aditya"]
console.log(myarr);

const my = myarr.slice(1,3)//it will create new array
console.log(my)
console.log(myarr);
const mys = myarr.splice(1,3) // splice will change the original array
console.log(my)
console.log(myarr);

myarr.unshift(0)// add element to first index
console.log(myarr);
my.shift()//remove element from first index
console.log(myarr);

