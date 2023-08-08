function play(){
    var audio = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3");
    audio.play();
}

setInterval(()=>{
    let d = new Date()
    time.innerHTML = d.toDateString()+" "+d.toTimeString()

},1000)

const setAlarm = (seconds) =>{
    let d = new Date().getTime();
    setTimeout(()=>{
        play()
    },seconds*1000)
    setInterval(()=>{
        let secondsLeft = (new Date().getTime()-(Math.floor(seconds*1000 + d)));
        if(secondsLeft>0){
            alarm.innerHTML="Alarm ringing in :"+ secondsLeft/1000 + "seconds"
        }
    })
}
setAlarm(500);

let s = prompt("After how many seconds do you want an alarm?");
setAlarm(parseInt(s));