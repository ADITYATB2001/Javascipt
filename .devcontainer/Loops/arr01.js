const arr = [1,2,3,4,5]

//forof loop for array

for (const num of arr) {
    console.log(num);
}

//maps object hold key-value pairs and remembers the original insertion order of the keys and uniqness
//not works for objects

const map = new Map()

map.set("In","India")
map.set("USA","America")

for (const [key,value] of map) {
    console.log(key+":-"+value)
}


const obj = {
    name: "Aditya",
    age: 21,
    email: "Aditya@google.com"
}


//forin loop for objects and array
for (const key in obj) {
    console.log(key+":-"+obj[key])
}

for(const key in arr)
{
    console.log(arr[key])
}

//forEach loop for array

arr.forEach(function(item){
    console.log(item);
})


arr.forEach((item)=>console.log(item))

function printSteam(item){
    console.log(item)
}

arr.forEach(printSteam)

//forEach loop for objects

const obj2 = [
    {
        name:"Aditya",
        age:22
    },
    {
        name: "Yogesh",
        age:24
    }
]

obj2.forEach((items)=>{
    for (const key in items) {
        console.log(key+" "+items[key])
    }
    console.log()
})

