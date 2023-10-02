const arr = [1,2,3,4,5,6,7]

// const newItem = arr.forEach((item){
//     return item
// })
// console.log(newItem)

//As we see forEach not return any value so we comeup with filter,map,reduce

//filter

const newItem = arr.filter((item)=>item>4)
console.log(newItem)

//we can achieve through forEach loop

const items = []
arr.forEach((item)=>{
    if(item > 4)
        items.push(item)
})
console.log(items)