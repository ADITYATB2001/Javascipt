const buttons = document.querySelectorAll('button')
//console.log(buttons)
const body = document.querySelector('body')
//console.log(body)

buttons.forEach((button)=>{
  //console.log(button.id)
  button.addEventListener('click',(e)=>{
    //console.log(e.target)
    if(e.target.id === 'orange'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'pink'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }

  })
})