var showCurrentTime = function(){
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();
  var meridian = "AM";
  if(hours >= 12){
    meridian = "PM";
  }
  if(hours >= 12){
    hours = hours - 12;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  document.getElementById('clock').innerText = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
}
showCurrentTime();

setInterval(showCurrentTime, 1000);
