setInterval(function() {
    var currentTime=new Date();
    var hours =currentTime.getHours();
    var minute=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();
    var period = "AM";
    if(hours>=12){
        period ="PM";
    }

    if(hours>12){
        hours=hours -12;
    }
    if(seconds < 10){
        seconds = "0" +seconds;
    }
    if (minute < 10){
        minute = "0" + minute;
    }
var clockTime = hours + ":" + minute + ":" + seconds + " " + period ;

var clock =document.getElementById('clock');
clock.innerText=clockTime;

}, 1000);

