const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const body = document.querySelector('body');

function randomColor(){
  const hex = "0123456789ABCDEF";
  let color = "#";
  for(let i=0; i<6; i++){
    color += hex[Math.round(Math.random()*16)];
  }
  return color;
}

let intervalId;
const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000)
  }
  function changeBgColor(){
  body.style.backgroundColor = randomColor()
  }
}

const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null;
}

startBtn.addEventListener('click', startChangingColor)

stopBtn.addEventListener('click', stopChangingColor)

stopBtn.addEventListener


