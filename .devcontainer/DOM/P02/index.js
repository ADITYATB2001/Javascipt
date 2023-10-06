const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
  console.log(e.target)
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  //console.log(height)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('.result')

  if(height == 0 || isNaN(height)){
    //const newr = document.createElement('h1')
    result.innerHTML = "<h1>Pleae give proper height</h>"
    
  }

  else if(weight === 0 || isNaN(weight)){
    result.innerHTML = "<h1>Pleae give proper height</h>"
  }
  else{
    const bmi = (weight/((height*height)/1000)).toFixed(2)
    result.innerHTML = `${bmi}`
  }
})