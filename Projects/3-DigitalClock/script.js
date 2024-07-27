
// var hour = now.getHours();
// var minute = now.getMinutes();
// var second = now.getSeconds();
// if(hour < 10){
//   hour = "0"+hour
// }
// if(minute < 10){
//   minute = "0"+minute
// }
// if(second < 10){
//   second = "0"+second
// }
// var date = hour + ":" + minute + ":" + second

const clock = document.querySelector('#clock')

setInterval(function (){
    let now = new Date()
    const time = now.toLocaleTimeString()
    clock.innerHTML = time
  }, 1000)