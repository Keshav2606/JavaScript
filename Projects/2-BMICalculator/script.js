const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const height = parseFloat(document.querySelector('#height').value)/100;
  const weight = parseFloat(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = "Please Enter a valid height"
  } else if(weight === '' || weight < 3 || isNaN(weight)){
    result.innerHTML = "Please Enter a valid weight"
  }else{
    var ans = weight/(height**2);
    if(ans < 18.6 || ans > 24.9){
      result.textContent = ans.toFixed(2)
      result.setAttribute('style', 'color: red')
    } else {
    result.textContent = ans.toFixed(2)
    result.setAttribute('style', 'color:green')
    }
  }
})