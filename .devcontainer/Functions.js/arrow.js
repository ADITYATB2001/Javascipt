const shop = {
    name: "Tomoto",
    price:20,
    details:function(){
        console.log(`My name is ${this.name} and my price is ${this.price}`)// this keyword current object instances
    }
}

shop.details()

function chai()
{
    let shop2 = {
        name:"Orange",
        price:20
    }

    console.log(this.name)// unable to use this keyword in function
}

 chai()



const tea = function()
{
    console.log("hi")
}

tea()



//arrow functions

//1) if we don't use {} then no need of return keyword
const add = (num1,num2) => num1+num2

console.log(add(1,2));

//2)if we use {} the it need return keyword

const sub = (num1,num2) =>{
    return num1 - num2
}

console.log(sub(4,3));