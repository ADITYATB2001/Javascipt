
const mykey = Symbol("Myk")

const Cuser = {
    name: "Aditya",
    age:22,
    [mykey]:"9344",//used for symbols
    hobbies:"cricket",
    email:"Aditya@google.com",
    friends:["vk","Hit","msd"]
}

//console.log(Cuser.name);
//console.log(Cuser["name"]) //it is correct way of accessing
//console.log(Cuser[mykey]);
//console.log(Cuser["friends"][1]);

//Object.freeze(Cuser)//we can freeze the objects

Cuser.greeting = function(){
    console.log(`Hi my name is ${this.name}`)
}


console.log(Cuser.greeting())//
