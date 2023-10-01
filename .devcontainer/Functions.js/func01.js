function sayHi(name)
{
    console.log(`My name is ${name}`)
}

//sayHi("Aditya")

function goodBye(user = "Aditya")//if we pass argument it will override

{
    console.log(`good bye ${user}`);
}
goodBye("Yogi")


function add(num1,num2)
{
    return num1 + num2
}

const result = add(2,3)
//console.log(result);

function func(...num)//spread operator
{
    return num
}

//console.log(func(200,300,499,"Aditya"))

//objects passing in function


const myObj = {
    name:"Tomoto",
    price:20
}


function func1(anyObject)
{
    console.log(`My name is ${anyObject.name} and price is ${anyObject.price}`)
}

//func1(myObj)

func1({
    name:"Orange",
    price:28
})

//array passing in function

function func2(anyArray)
{
    console.log(anyArray[1])
}

const my = [100,200,300]

//func2(my)

func2(["aditya","VK","MSD"])


function addOne(num)
{
    return num+1;
}

const res = addOne(1)
console.log(res);

// second type

const addTwo = function(num){
    return num+1
}
addTwo(3)